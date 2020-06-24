CREATE TABLE "teams"(
    "team_id" SERIAL PRIMARY KEY,
    "team_name" VARCHAR(62) UNIQUE,
    "player_name" VARCHAR UNIQUE references "players"(full_name) ON DELETE CASCADE NOT NULL,
    "player_id" INT references "players"(player_id) ON DELETE CASCADE NOT NULL
);