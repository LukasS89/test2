// components/Logout.tsx
import React, { forwardRef, useImperativeHandle } from 'react';
import { supabase } from '../lib/supabaseClient';

interface LogoutActions {
  triggerLogout: () => Promise<void>;
}

const Logout = forwardRef<LogoutActions, undefined>((_, ref) => {
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout error:", error.message);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  useImperativeHandle(ref, () => ({
    triggerLogout: handleLogout,
  }));

  return <div style={{ background: 'transparent', width: '1px', height: '1px' }}></div>;
});

Logout.displayName = "Logout"; // Add this line

export default Logout;
