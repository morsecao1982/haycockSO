// ── Supabase credentials ──────────────────────────────────────
// 1. Go to https://supabase.com → New Project
// 2. Settings → API → copy "Project URL" and "anon public" key
// 3. Paste them here

const SUPABASE_URL  = 'https://gsojegpumhdgsejswjnr.supabase.co';
const SUPABASE_KEY  = 'sb_publishable_vBHTI1xkGxnFwFo1vtb9aw_gGh-fALV';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);
