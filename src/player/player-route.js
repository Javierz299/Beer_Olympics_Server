const express = require('express')

const PlayerService = require('./player-service')

const PlayerRouter = express.Router()
const jsonBodyParser = express.json()






PlayerRouter
    .post('/', jsonBodyParser, async (req,res,next) => {
        const { full_name, nickname, password} = await req.body
        console.log(full_name, nickname, password)

        const player = {
            full_name,
            nickname,
            password
        }
        
        try{
            PlayerService.insertPlayer(
                req.app.get('db'),
                player
            )

            res.status(201)
              .json(PlayerService.serializePlayer(player))
            
        } catch(err){
            next(err)
        }

        
})

PlayerRouter
    .delete('/delete/:id', async (req,res,next) => {
        const player_id = await req.params.id
        const playerId = JSON.stringify(player_id)
        const playerNum = parseInt(playerId)
        console.log(playerNum)
        try {
            await pool.query(`DELETE FROM players
            WHERE player_id=$1`,
            [playerNum],
            (q_err,q_res) => {
                if(q_err){
                    throw q_err;
                }
                console.log(q_res)
                res.status(200).send(`Player deleted with id of: ${q_res}`)
            }
        )
       
        } catch(err){
            next(err)
        }
       

    
    })




    module.exports = PlayerRouter