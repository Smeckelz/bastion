# Chronix — local dev setup

This repository contains a Next.js 15 app scaffold for the Chronix landing page.


Quick start (PowerShell):

```powershell
# 1) Copy env (PowerShell)
Copy-Item .env.example .env
# 2) Install
npm install
# 3) Generate Prisma client (if using a local DB)
npm run prisma:generate
# 4) Run dev server
npm run dev
```

Notes:
- Fill `.env` with your Discord OAuth credentials and a DATABASE_URL for Prisma.
- This scaffold installs `next`, `react`, `tailwindcss`, `next-auth`, and `prisma`.

Vercel deployment
-----------------

1) Push your repository to GitHub (or Git provider).
2) In Vercel, import the repo and set these Environment Variables in the Project Settings:
	- NEXTAUTH_SECRET
	- DISCORD_CLIENT_ID
	- DISCORD_CLIENT_SECRET
	- DATABASE_URL
3) Set the Build Command to:

```
npm run vercel-build
```

4) Set the Output Directory to the default (no change needed for Next.js App Router).

5) Deploy — Vercel will run `prisma migrate deploy` during the build, then `prisma generate` and `next build`.

Notes on NeonDB and Vercel:
- Ensure your NeonDB allowed IPs / connection settings allow connections from Vercel (Neon usually supports connection without IP allowlisting).
- For production, do not use `prisma migrate dev`; `prisma migrate deploy` is recommended.

