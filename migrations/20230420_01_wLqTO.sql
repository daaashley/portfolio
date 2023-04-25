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
