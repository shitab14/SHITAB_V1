import { createClient } from '@supabase/supabase-js';
import { env } from '@/config/env';

const supabaseUrl = env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = env.SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
