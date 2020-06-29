const express = require('express')

const PlayerService = require('./player-service')

const PlayerRouter = express.Router()
const jsonBodyParser = express.json()


PlayerRouter
    .post('/', jsonBodyParser, async (req,res,next) => {
        const { full_name,} = await req.body
        console.log(full_name,)

        const player = {
            full_name,
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
    .delete('/delete/:id', (req,res,next) => {
        const { id } = req.params
        console.log("param",id)
        

        PlayerService.deletePlayer(
            req.app.get('db'),
            id
          )
          .then(rows => res.status(204).end()
          )
          .catch(next)
          

    
    })

    PlayerRouter
        .get('/allplayers', (req,res, next) => {
            PlayerService.getAllPlayers(req.app.get('db'))
                .then(response => {
                    res.json(response.map(p => PlayerService.serializePlayer(p)))
                })
                .catch(next)
        })




    module.exports = PlayerRouter