# Production security checklist

- [ ] Use secure, httpOnly, sameSite session cookies
- [ ] Hash passwords with Argon2id or bcrypt
- [ ] Never trust client-side subscription state
- [ ] Enforce OWNER authorization on every owner API route
- [ ] Unique database constraint for TRX IDs
- [ ] Rate-limit auth and payment endpoints
- [ ] Validate all request bodies with Zod/server schemas
- [ ] CSRF protection where applicable
- [ ] Audit every payment approval/rejection
- [ ] Never expose payment/account data to child mode
- [ ] Do not store unnecessary sensitive child information
- [ ] Encrypt backups and use least-privilege database credentials
- [ ] Add monitoring and error tracking
- [ ] Add automated tests for subscription edge cases
- [ ] Verify all AI recommendations against an allowlisted curriculum
