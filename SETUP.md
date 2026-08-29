# Haycock Science Olympiad — Setup Guide

## Step 1: Set up Supabase (free, ~5 minutes)

1. Go to https://supabase.com → **Start your project** → sign in with GitHub or Google
2. Click **New Project** → name it `haycockso` → set a database password → choose region **US East**
3. Wait ~2 minutes for the project to spin up

### Create the submissions table

In the Supabase dashboard → **SQL Editor** → paste and run this:

```sql
CREATE TABLE submissions (
  id           BIGSERIAL PRIMARY KEY,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  first_name   TEXT NOT NULL,
  last_name    TEXT NOT NULL,
  grade        INT,
  returning    TEXT DEFAULT 'no',
  parent_email TEXT NOT NULL,
  student_email TEXT,
  phone        TEXT,
  events       TEXT[],
  experience   TEXT,
  notes        TEXT
);

-- Anyone can submit the form (insert only)
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_insert" ON submissions FOR INSERT WITH CHECK (true);

-- Only logged-in admins can read
CREATE POLICY "admin_select" ON submissions FOR SELECT USING (auth.role() = 'authenticated');
```

### Get your API credentials

Settings → API → copy:
- **Project URL** (looks like `https://abcdefgh.supabase.co`)
- **anon public** key (long string starting with `eyJ...`)

Paste both into `js/config.js`.

---

## Step 2: Create your admin account

Supabase dashboard → **Authentication** → **Users** → **Invite user**
Enter your email. You'll receive an email to set a password.

That email + password is what you use to log in at `/admin/`.

---

## Step 3: Deploy to Vercel (free, ~3 minutes)

```bash
cd /Users/user/Documents/Claude/HaycockSO

# Initialize git
git init
git add .
git commit -m "Initial site"

# Push to GitHub (create repo named 'haycockso' on github.com first)
git remote add origin git@github.com:morsecao1982/haycockso.git
git push -u origin main

# Deploy
npx vercel --yes --name haycockso
```

Then go to https://vercel.com → your project → **Settings → Domains** → add `haycockso.com`.

Point your domain's DNS to Vercel (they give you the exact records to add).

---

## Day-to-day editing cheat sheet

| What to update | Where |
|----------------|-------|
| Announcements | `index.html` — find the `<!-- EDIT ANNOUNCEMENTS HERE -->` block |
| Event assignments | `tournaments.html` — uncomment the assignments table block |
| Tournament results | `tournaments.html` — uncomment the results table block |
| Add a new event card | `events.html` — copy any `<div class="event-card">` block |
| Add a resource link | `resources.html` — copy any `<li>` inside a `resource-list` |
| Coach email | Search all files for `coach@haycockso.com` and replace |
| About text | `index.html` — find `<!-- EDIT THIS ABOUT TEXT -->` |
| Season timeline dates | `tournaments.html` — edit the `.timeline-item` blocks |

After any edit: commit and push to GitHub — Vercel auto-deploys in ~30 seconds.
