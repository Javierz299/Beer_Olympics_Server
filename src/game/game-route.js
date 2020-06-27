const express = require('express')

const GameService = require('./game-service')

const GameRouter = express.Router()
const jsonBodyParser = express.json()



GameRouter
    .post('/', jsonBodyParser, async (req,res,next) => {
        const { game_name } = await req.body || {}
        console.log('game',game_name)

        const game = { 
            game_name,
        }
        try{
             GameService.insertGame(
                 req.app.get('db'),
                 game
             )

             res.status(201)
                .json(GameService.serializeGame(game))


        } catch(err){
            next(err)
        }
    })
//delete entire game
GameRouter
    .delete('/delete/:id', (req,res,next) => {
        const { id } = req.params
        
        GameService.deleteGame(
            req.app.get('db'),
            id
        )
        .then(rows => res.status(204).end()
        )
        .catch(next)
    })

GameRouter
    .patch('/update/:id', jsonBodyParser, (req,res,next) => {
        let { team_name, player_name, playertwo_name, playerthree_name, playerfour_name } = req.body
        let gameupdate = { team_name, player_name, playertwo_name, playerthree_name, playerfour_name}
        console.log('gameupdate',gameupdate)


        // if(GameService.searchPlayer(req.app.get('db'),gameupdate)){
        //     console.log('ran successful')
        // }

        //game references player name from team names
        GameService.updateGame(
            req.app.get('db'),
            req.params.id,
            gameupdate
        )
        .then(rows => res.status(204).end())

    })

GameRouter
    .get('/allgames', (req,res,next) => {
        GameService.getAllGames(
            req.app.get('db')
        )
        .then(response => {
            console.log('response',response)
            res.json(response.map(g => GameService.serializeGame(g)))
        })
        .catch(next)
    })

module.exports = GameRouter