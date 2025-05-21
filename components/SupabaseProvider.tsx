'use client';

import { useState, ReactNode } from 'react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

export default function SupabaseProvider({ children }: { children: ReactNode }) {
  // Initialize once on the client
  const [supabaseClient] = useState(() =>
    createPagesBrowserClient()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}
