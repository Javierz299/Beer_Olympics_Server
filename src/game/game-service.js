const GameService = {
    getAllGames(db){
        return db
        .select('*')
        .from('games')
        .then(res => res)
    },
    insertGame(db,newGame){
        return db
        .insert(newGame)
        .into('games')
        .returning('*')
        .then(rows => rows[0])
    },
    serializeGame(game){
        return {
            id: game.id,
            game_name: game.game_name,
            team_name: game.team_name,
            player_name: game.player_name,
            playertwo_name: game.playertwo_name,
            playerthree_name: game.playerthree_name,
            playerfour_name: game.playerfour_name
        }
    },
    deleteGame(db,id){
        return db
        .from('games')
        .where('id',id)
        .delete()
    },
    updateGame(db,id,game){
        return db
        .from('games')
        .where('id',id)
        .update(game)
    }
}

module.exports = GameService