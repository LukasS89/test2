import React, { useEffect, useState } from "react";
import { DataProvider } from "@plasmicapp/host";
import { supabase } from '../lib/supabaseClient';

interface Visitor {
  created_at: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  userName: string;
}

async function fetchVisitorData(userId: string): Promise<Visitor | null> {
  const { data, error } = await supabase
    .from('visitors')
    .select('created_at, firstName, lastName, email, userName')
    .eq('user_id', userId)
    .single();

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
  const [visitorData, setVisitorData] = useState<Visitor | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserVisitorData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setIsLogged(true);
        const visitor = await fetchVisitorData(user.id);
        setVisitorData(visitor);
      } else {
        setIsLogged(false);
        setVisitorData(null);
      }
      setLoading(false);
    };

    fetchUserVisitorData();
  }, [authUrl]);

  return (
    <DataProvider name="visitor" data={visitorData}>
      <DataProvider name="isLogged" data={isLogged}>
        {loading ? <p>Loading...</p> : children}
      </DataProvider>
    </DataProvider>
  );
};
