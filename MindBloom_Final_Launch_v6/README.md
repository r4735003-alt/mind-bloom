# MindBloom Web App — MVP Product Build

This is a runnable front-end web prototype of MindBloom with:
- Child learning experience for age bands 2–4, 4–6, 6–9, 9–12, 12–15, 15–18, 18+
- Communication, AAC, social skills, emotions, sensory support, daily living, cognition, learning, executive function, motor, safety and independence areas
- Parent, therapist and owner-admin views
- 31-day free access
- Rs. 799 / 31-day manual NayaPay subscription flow
- Transaction ID submission
- Owner approval/rejection flow
- 31-day unlock after approval
- LocalStorage demo persistence
- Responsive mobile/desktop UI

IMPORTANT:
This browser build is an MVP/demo and is NOT a secure production payment system. The admin controls and subscription state are client-side for demonstration. Production must move authentication, authorization, payment requests, subscription dates, audit logs and approval logic to a secure server/database.

The product should not claim to cure autism. It is intended to support learning, communication, participation and independence and should complement professional care where needed.

Run locally:
- Open index.html directly, or serve the folder with any static web server.

Recommended production stack:
Next.js + PostgreSQL/Prisma + server-side auth + secure owner role + audit logging + object storage + monitoring.
