CREATE TABLE "players"(
    "player_id" SERIAL PRIMARY KEY,
    "full_name" VARCHAR(32) NOT NULL,
    "nickname" VARCHAR(20) UNIQUE NOT NULL,
    "password" INT(4) NOT NULL
);