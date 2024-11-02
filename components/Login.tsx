// components/Login.tsx
import React, { forwardRef, useImperativeHandle } from 'react';
import { supabase } from '../lib/supabaseClient'; // Adjust the path based on your directory structure

interface LoginProps {
  email: string; // Email value from parent component
  password: string; // Password value from parent component
}

// Define the actions that can be triggered externally
interface LoginActions {
  triggerLogin: () => Promise<void>; // Action to trigger login
}

// Use forwardRef to expose actions
const Login = forwardRef<LoginActions, LoginProps>(({ email, password }, ref) => {
  // Function to handle login logic
  const handleLogin = async () => {
    try {
      console.log("Attempting to log in with:", { email, password }); // Log email and password
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      // Log the entire response for debugging
      console.log("Supabase login response:", { user, error });

      if (error) {
        console.error("Login error:", error.message);
      } else {
        console.log("Login successful:", user);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  // Use useImperativeHandle to expose functions
  useImperativeHandle(ref, () => ({
    triggerLogin: handleLogin, // Expose triggerLogin action
  }));

  return (
    <div style={{ background: 'transparent', width: '1px', height: '1px' }}>
      {/* This empty div has a 1px background and is invisible in UI */}
    </div>
  );
});

export default Login;
