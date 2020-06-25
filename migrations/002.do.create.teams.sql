CREATE TABLE "teams"(
    "team_id" SERIAL PRIMARY KEY,
    "team_name" VARCHAR(62) UNIQUE,
    "player_name" VARCHAR UNIQUE references "players"(full_name) ON DELETE CASCADE ,
    "player_id" INT references "players"(id) ON DELETE CASCADE 
);