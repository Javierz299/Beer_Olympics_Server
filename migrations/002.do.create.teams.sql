CREATE TABLE "teams"(
    "id" SERIAL PRIMARY KEY,
    "team_name" VARCHAR(62) UNIQUE,
    "player_name" VARCHAR NULL UNIQUE references "players"(full_name),
    "playertwo_name" VARCHAR NULL UNIQUE references "players"(full_name),
    "playerthree_name" VARCHAR NULL UNIQUE references "players"(full_name), 
    "playerfour_name" VARCHAR NULL UNIQUE references "players"(full_name)
);