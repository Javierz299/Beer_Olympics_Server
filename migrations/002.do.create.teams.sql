CREATE TABLE "teams"(
    "id" SERIAL PRIMARY KEY,
    "team_name" VARCHAR(62) UNIQUE,
    "player_name" VARCHAR NULL UNIQUE references "players"(full_name) ON DELETE CASCADE,
    "playertwo_name" VARCHAR NULL UNIQUE references "players"(full_name) ON DELETE CASCADE ,
    "playerthree_name" VARCHAR NULL UNIQUE references "players"(full_name) ON DELETE CASCADE 

);