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
    },
    searchPlayer(db,gameupdate){
        let values = gameupdate.map(g => Object.values(g))
        console.log(values)
        return db
        .select('*')
        .from('teams')
        .then( res => console.log('playeres',res))
    }
}

module.exports = GameService