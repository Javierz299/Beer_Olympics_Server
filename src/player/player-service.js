
const PlayerService = {
    insertPlayer(db,newPlayer){
        console.log("db",newPlayer)
        return db
          .insert(newPlayer)
          .into('players')
          .returning('*')
          .then(rows => rows[0])

    },
    serializePlayer(player){
        return{
            id: player.id,
            full_name: player.full_name,
        }
    },
    deletePlayer(db,id){
        console.log("service",id)
        return db
         .from('players')
         .where('id',id)
         .delete()
    },
    getAllPlayers(db){
        return db
            .select('*')
            .from('players')
            .then(res => res)
    },
    
    

}

module.exports = PlayerService