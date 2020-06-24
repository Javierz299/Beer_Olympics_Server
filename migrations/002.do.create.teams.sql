CREATE TABLE "teams"(
    "team_id" SERIAL PRIMARY KEY,
    "team_name" VARCHAR(62),
    "player_name" VARCHAR references "players"(full_name) ON DELETE CASCADE NOT NULL,
    "player_id" INT references "players"(player_id) ON DELETE CASCADE NOT NULL
);