export const env = {
  NODE_ENV: import.meta.env.MODE || 'development',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || '',
  SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
};
