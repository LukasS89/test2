// components/AuthGlobalContext.tsx
import React, { useEffect, useState } from "react";
import { DataProvider } from "@plasmicapp/host"; // or "@plasmicapp/loader-*"
import { supabase } from '../lib/supabaseClient'; // Adjust the import path if necessary

// Define the type for visitor data without user_id
type Visitor = {
  created_at: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  userName: string;
};

// Function to fetch visitor data, excluding user_id
async function fetchVisitorData(userId: string): Promise<Visitor | null> {
  const { data, error } = await supabase
    .from('visitors')
    .select('created_at, firstName, lastName, email, userName') // Only select the fields you want to expose
    .eq('user_id', userId)
    .single(); // Fetch the visitor row based on user ID

  if (error) {
    console.error('Error fetching visitor data:', error);
    return null;
  }
  return data;
}

interface AuthGlobalContextProps {
  authUrl?: string;
}

export const AuthGlobalContext = ({ children, authUrl }: React.PropsWithChildren<AuthGlobalContextProps>) => {
  const [visitorData, setVisitorData] = useState<Visitor | null>(null); // Store visitor data here
  const [isLogged, setIsLogged] = useState<boolean>(false); // Track if the user is logged in
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserVisitorData = async () => {
      const { data: { user } } = await supabase.auth.getUser(); // Get the current user
      if (user) {
        setIsLogged(true); // User is logged in
        const visitor = await fetchVisitorData(user.id); // Fetch visitor data using the user ID
        setVisitorData(visitor);
      } else {
        setIsLogged(false); // User is not logged in
        setVisitorData(null); // Clear visitor data if not logged in
      }
      setLoading(false);
    };

    fetchUserVisitorData();
  }, [authUrl]);

  // Provide visitor data and isLogged status
  return (
    <DataProvider name="visitor" data={visitorData}>
      <DataProvider name="isLogged" data={isLogged}>
        {children}
      </DataProvider>
    </DataProvider>
  );
};
