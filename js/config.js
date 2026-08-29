// ── Supabase credentials ──────────────────────────────────────
// 1. Go to https://supabase.com → New Project
// 2. Settings → API → copy "Project URL" and "anon public" key
// 3. Paste them here

const SUPABASE_URL  = 'YOUR_SUPABASE_URL';   // e.g. https://abcdefgh.supabase.co
const SUPABASE_KEY  = 'YOUR_SUPABASE_ANON_KEY';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);
