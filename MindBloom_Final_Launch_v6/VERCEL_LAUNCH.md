# MindBloom — Vercel Launch

## 1) Create PostgreSQL
Use a hosted PostgreSQL provider such as Neon, Supabase, or another PostgreSQL service. Copy its connection string.

## 2) Import GitHub repo into Vercel
Vercel -> Add New -> Project -> Import the MindBloom GitHub repository.

The repo already contains `vercel.json`, so the build command is:
`npm run vercel-build`

## 3) Add Vercel Environment Variables
Add for Production (and Preview if desired):

- `DATABASE_URL` = your PostgreSQL connection string
- `AUTH_SECRET` = a random secret of at least 32 characters
- `OWNER_EMAIL` = `raffy@mindbloom.app`
- `OWNER_PASSWORD` = `Raffy@123098` (set this directly in Vercel; do not put the real value in GitHub)

## 4) Deploy
Click Deploy. The Vercel build will:
1. generate Prisma Client
2. apply the checked-in Prisma migration
3. seed the Owner and initial activities
4. build Next.js

## 5) Owner login
After deployment open `/login`.
Email: `raffy@mindbloom.app`
Password: the value you set in `OWNER_PASSWORD`.

Owner dashboard: `/owner`

## 6) If the database already exists
The migration is idempotent through Prisma migration history. Do not use `prisma db push` in production after launch; use migrations for future schema changes.

## 7) NayaPay
NayaPay remains manual verification: user submits TRX ID, Owner verifies it privately, then approval grants exactly 31 days.

## Security
Never commit `.env`, real passwords, `DATABASE_URL`, or `AUTH_SECRET` to GitHub. Rotate the Owner password after first production login if needed.
