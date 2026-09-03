# MindBloom — Final Launch Package

MindBloom is a strengths-based learning and independence support platform for autistic children, teens and adults. It does **not** claim to diagnose or cure autism and is designed to complement qualified professional support.

## Included
- Next.js 15 + React 19 + TypeScript
- PostgreSQL + Prisma data model
- Secure HTTP-only JWT session cookie
- Parent and private OWNER roles
- Signup/login/logout
- 31-day free access from signup
- Rs.799 / 31-day manual NayaPay subscription
- TRX ID submission + unique duplicate protection
- Owner approval/rejection + audit log
- Child profiles and age bands 2–4 through 18+
- Activity library seed
- Server-side entitlement gate
- Practice attempts and progress records
- Goals
- Progress dashboard
- Resource Center
- Settings/logout
- Responsive UI
- Dockerfile and Vercel configuration

## Production launch
1. Create a managed PostgreSQL database.
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and a long random `AUTH_SECRET`.
3. Set private `OWNER_EMAIL` and `OWNER_PASSWORD`.
4. Run `npm install`.
5. Run `npx prisma generate`.
6. Run `npx prisma migrate deploy` after creating a migration from the Prisma schema in your deployment workflow.
7. Run `npm run prisma:seed` (or `npx tsx scripts/bootstrap-owner.ts` for owner bootstrap).
8. Deploy the repository to Vercel or a Node/Docker host.
9. Configure the same environment variables on the host.
10. Test signup → 31-day free access → NayaPay TRX submission → owner approval → 31-day paid access.

### Required production hardening before accepting real users/payments
- Add a managed rate limiter/WAF.
- Enable database backups and point-in-time recovery.
- Add error monitoring and uptime alerts.
- Add privacy policy, terms and consent/parental notices appropriate to your jurisdiction.
- Run security and accessibility testing.
- Add automated unit/integration/e2e tests.
- Use HTTPS and production domain.
- Keep owner credentials private and enable strong password hygiene.

## NayaPay
Payment instructions in the UI are configured for:
- Account name: Muhammad Raffy Umer
- Account number: 03250150477
- Amount: Rs.799
- Access after approval: exactly 31 days

This build intentionally uses **manual owner verification**, not an automatic NayaPay gateway.
