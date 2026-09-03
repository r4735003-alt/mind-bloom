# MindBloom — Launch Wiring

Includes real email/password signup + login sessions, protected dashboard/owner routes, server-side 31-day free access, NayaPay payment submission, owner approval APIs, child creation API, seeded activities, Prisma schema, and owner bootstrap seed.

## Setup
1. Copy `.env.example` to `.env` and set a real PostgreSQL `DATABASE_URL` and strong `AUTH_SECRET`.
2. `npm install`
3. `npx prisma generate`
4. `npx prisma migrate dev --name init`
5. Set `OWNER_EMAIL` and `OWNER_PASSWORD`, then `npm run prisma:seed`
6. `npm run dev`

Paid access starts at owner approval and lasts exactly 31 days. Free access is 31 days from server-side signup time.
