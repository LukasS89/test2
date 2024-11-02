// components/Logout.tsx
import React, { forwardRef, useImperativeHandle } from 'react';
import { supabase } from '../lib/supabaseClient'; // Adjust the path based on your directory structure

// Define the actions that can be triggered externally
interface LogoutActions {
  triggerLogout: () => Promise<void>; // Action to trigger logout
}

// Use forwardRef to expose actions
const Logout = forwardRef<LogoutActions, {}>((_, ref) => {
  // Function to handle logout logic
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    } else {
      console.log('Logged out successfully!');
      // Optionally, handle any post-logout actions (like redirecting or notifying the user)
      window.location.reload(); // Reload the page to update the UI
    }
  };

  // Use useImperativeHandle to expose functions
  useImperativeHandle(ref, () => ({
    triggerLogout: handleLogout, // Expose triggerLogout action
  }));

  return (
    <div style={{ background: 'transparent', width: '1px', height: '1px' }}>
      {/* This empty div has a 1px background and is invisible in UI */}
    </div>
  );
});

export default Logout;
