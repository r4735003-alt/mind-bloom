# Auth integration
The UI pages are ready as a shell. Connect them to the included Prisma schema and API:
- Register: hash password, create PARENT user, create child, record signup timestamp for the 31-day free period.
- Login: issue secure httpOnly session cookie.
- Dashboard: load user/child data server-side.
- Owner: middleware must require role OWNER; never expose owner signup.
- Payment: POST /api/payments with TRX ID; owner reviews through /api/owner/payments.
- Subscription: server middleware checks free-period or approved subscription; localStorage is not trusted.

For a real launch, add CSRF/rate limiting, email verification, password reset, monitoring, backups and privacy/security review.
