CREATE TABLE "players"(
    "id" SERIAL PRIMARY KEY,
    "full_name" VARCHAR(32) UNIQUE NOT NULL,
);