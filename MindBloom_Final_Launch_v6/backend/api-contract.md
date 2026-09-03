# API contract

## Auth
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/session

## Child/profile
GET/POST /api/children
PATCH /api/children/:id

## Activities
GET /api/activities?ageBand=2-4&skill=communication
POST /api/attempts

## Goals
GET/POST /api/goals
PATCH /api/goals/:id

## Payments
POST /api/payments
  body: { trxId: string }
  server verifies:
  - authenticated parent
  - exact price = Rs.799
  - NayaPay method
  - unique TRX ID
  - no duplicate pending/approved request

GET /api/payments/me

## Owner only
GET /api/owner/payments?status=PENDING
POST /api/owner/payments/:id/approve
POST /api/owner/payments/:id/reject

Approval must run in a database transaction:
1. lock payment request
2. ensure PENDING
3. mark APPROVED
4. create subscription start=approval timestamp
5. create end=start+31 days
6. write audit log

No public OWNER signup route.
