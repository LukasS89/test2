// components/Login.tsx
import React, { forwardRef, useImperativeHandle } from 'react';
import { supabase } from '../lib/supabaseClient'; // Adjust the path based on your directory structure

interface LoginProps {
  email: string;
  password: string;
}

interface LoginActions {
  triggerLogin: () => Promise<void>;
}

const Login = forwardRef<LoginActions, LoginProps>(({ email, password }, ref) => {
  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        console.error("Login error:", error.message);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  useImperativeHandle(ref, () => ({
    triggerLogin: handleLogin,
  }));

  return <div style={{ background: 'transparent', width: '1px', height: '1px' }}></div>;
});

Login.displayName = "Login"; // Add this line

export default Login;
