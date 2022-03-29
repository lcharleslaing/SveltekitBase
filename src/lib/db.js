import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const serviceKey = import.meta.env.VITE_SERVICE_KEY;
// @ts-ignore
export const supabase = createClient(supabaseUrl, supabaseKey);
// @ts-ignore
export const supabaseService = createClient(supabaseUrl, serviceKey);
// @ts-ignore
export const getServiceSupabase = () => createClient(supabaseUrl, serviceKey);

export default supabase;
