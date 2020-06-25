const { serialize } = require("v8")

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
            nickname: player.nickname,
            password: player.password
        }
    }
    

}

module.exports = PlayerService