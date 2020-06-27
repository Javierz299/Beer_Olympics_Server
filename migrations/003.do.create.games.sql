CREATE TABLE "games"(
    "id" SERIAL PRIMARY KEY,
    "game_name" VARCHAR(100) NOT NULL,
    "team_name" VARCHAR NULL references "teams"(team_name),
    "player_name" VARCHAR NULL references "players"(full_name),
    "playertwo_name" VARCHAR NULL UNIQUE references "players"(full_name) ,
    "playerthree_name" VARCHAR NULL UNIQUE references "players"(full_name),
    "playerfour_name" VARCHAR NULL UNIQUE references "players"(full_name)

);

