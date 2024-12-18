CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE EXTENSION IF NOT EXISTS unaccent;

create table "user" (
    "id" uuid primary key default uuid_generate_v4(),
    "phone" text not null unique,
    "password" text not null,
    "created_at" timestamptz default current_timestamp,
    "updated_at" timestamptz null
);