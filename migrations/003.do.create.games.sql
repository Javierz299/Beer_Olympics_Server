CREATE TABLE "games"(
    "id" SERIAL PRIMARY KEY,
    "game_name" VARCHAR(100) NOT NULL,
    "team_name" VARCHAR NULL references "teams"(team_name) ON DELETE CASCADE,
    "player_name" VARCHAR NULL references "teams"(player_name) ON DELETE CASCADE 
);