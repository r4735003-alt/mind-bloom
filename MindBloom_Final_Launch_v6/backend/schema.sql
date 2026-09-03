-- MindBloom production-oriented PostgreSQL schema starter
create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  password_hash text not null,
  role text not null check (role in ('PARENT','THERAPIST','OWNER')),
  created_at timestamptz not null default now()
);

create table if not exists children (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references users(id) on delete cascade,
  name text not null,
  age_band text not null,
  focus text,
  created_at timestamptz not null default now()
);

create table if not exists payment_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  trx_id text unique not null,
  amount_pkr integer not null check (amount_pkr = 799),
  method text not null default 'NAYAPAY',
  status text not null default 'PENDING' check (status in ('PENDING','APPROVED','REJECTED')),
  submitted_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by uuid references users(id),
  rejection_reason text
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  start_at timestamptz not null,
  end_at timestamptz not null,
  source_payment_request_id uuid unique references payment_requests(id),
  created_at timestamptz not null default now()
);

create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references users(id),
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index if not exists payment_requests_status_idx on payment_requests(status);
create index if not exists subscriptions_user_end_idx on subscriptions(user_id, end_at);
