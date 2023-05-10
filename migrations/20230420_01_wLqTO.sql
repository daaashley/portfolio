-- Initial Tables
-- depends:

create table if not exists "post" (
  "id" UUID PRIMARY KEY,
  "title" TEXT UNIQUE NOT NULL,
  "author" TEXT NOT NULL,
  "date" BIGINT NOT NULL,
  "image_url" TEXT NOT NULL,
  "body" TEXT NOT NULL
);

create table if not exists "user" (
  "id" UUID PRIMARY KEY,
  "username" TEXT UNIQUE NOT NULL,
  "hashed_password" TEXT NOT NULL
);
