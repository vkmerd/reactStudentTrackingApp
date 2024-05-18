import React, { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tdnqsgnohrskrghypooc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInRkbnFzZ25vaHJza3JnaHlwb29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1MTM5MTcsImV4cCI6MjAzMTA4OTkxN30.VSc3RwzPlo2_Myk5-h2q-NkU1jz5Weeo9HmPaHMhh-g';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const SupabaseContext = createContext();

export const SupabaseProvider = ({ children }) => (
  <SupabaseContext.Provider value={supabase}>
    {children}
  </SupabaseContext.Provider>
);

export const useSupabase = () => useContext(SupabaseContext);
