const { networkInterfaces } = require("os")

const TeamService = {
    getAllTeams(db){
        return db
          .select('*')
          .from('teams')
          .then(res => res)
    },

    insertTeam(db,newTeam){
         return db
          .insert(newTeam)
          .into('teams')
          .returning('*')
          .then(rows => rows[0])
    },
    serializeTeam(team){
        return {
            id: team.id,
            team_name: team.team_name,
            player_name: team.player_name,
            player_id: team.player_id
        }
    },
    deleteTeam(db,id){
        return db
          .from('teams')
          .where('id',id)
          .delete()

    },
    updateTeam(db,id,team){
        return db
          .from('teams')
          .where('id',id)
          .update(team)
    },


}

module.exports = TeamService