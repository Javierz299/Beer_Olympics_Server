CREATE TABLE "games"(
    "games_id" SERIAL PRIMARY KEY,
    "game_name" VARCHAR(100) NOT NULL,
    "team_name" VARCHAR references "teams"(team_name) ON DELETE CASCADE NOT NULL,
    "player_name" VARCHAR references "teams"(player_name) ON DELETE CASCADE NOT NULL
);