# Production deployment
1. Create PostgreSQL.
2. Set `.env` from `.env.example` with a strong AUTH_SECRET.
3. `npm install`
4. `npx prisma generate`
5. `npx prisma migrate dev` locally / `npx prisma migrate deploy` in production.
6. Bootstrap the single owner privately with `OWNER_EMAIL` and `OWNER_PASSWORD`.
7. Deploy to Vercel/Node host.
8. Configure environment variables.
9. Add rate limiting, monitoring, backups, email/push notifications and tests before live payments.

Payment: 31-day free period; Rs.799 = exactly 31 days; NayaPay manual verification; approval timestamp starts the paid 31-day subscription. Never trust localStorage for access control.
