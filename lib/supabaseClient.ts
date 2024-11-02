// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rnrfdxtsdvmxhjsoqoid.supabase.co'; // Replace with your actual Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJucmZkeHRzZHZteGhqc29xb2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MjQyNTcsImV4cCI6MjAzNzQwMDI1N30.N-1_fY2KLrl9sxmeM8z3bRc-b0ksQ0C4IWQpugCs65I'; // Replace with your actual Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
