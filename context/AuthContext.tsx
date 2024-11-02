// context/AuthContext.tsx
import React, { createContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient'; // Adjust the import path if necessary
import { Session, AuthChangeEvent } from '@supabase/supabase-js'; // Import necessary types

interface AuthContextType {
  user: any; // Replace with your user type if available
  loading: boolean;
  isLoggedIn: boolean; // Add this state
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Replace 'any' with your user type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check the current session
    const session = supabase.auth.getSession();
    setUser(session.user);
    setLoading(false);

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
      setUser(session?.user || null);
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const isLoggedIn = !!user; // Determine if the user is logged in

  return (
    <AuthContext.Provider value={{ user, loading, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
