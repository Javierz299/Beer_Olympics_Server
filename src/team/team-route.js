const express = require('express')

const TeamService = require('./team-service')

const TeamRouter = express.Router()
const jsonBodyParser = express.json()


TeamRouter
    .post('/', jsonBodyParser, async (req,res,next) => {
        const { team_name } = await req.body
        console.log('team',team_name)

        const team = {
            team_name,
        }

        try{
            TeamService.insertTeam(
                req.app.get('db'),
                team
            )

            res.status(201)
                .json(TeamService.serializeTeam(team))


        } catch(err){
            next(err)
        }


    })

TeamRouter
    .delete('/delete/:id', (req,res,next) => {
        const { id } = req.params
        console.log('param',id)

        TeamService.deleteTeam(
            req.app.get('db'),
            id
        )
        .then(rows => res.status(204).end()
        )
         .catch(next)

    })

TeamRouter
    .patch('/update/:id',jsonBodyParser, (req,res,next) => {
        const { team_name, player_name, player_id } = req.body
        console.log('patch',team_name,player_name,player_id)

        const teamUpdate = { team_name, player_name, player_id}

        TeamService.updateTeam(
            req.app.get('db'),
            req.params.id,
            teamUpdate
        )
        .then(rows => res.status(204).end()
        )
        .catch(next)

    })

TeamRouter
    .get('/allteams', (req,res,next) => {
        TeamService.getAllTeams(
            req.app.get('db')
        )
        .then(response => {
            res.json(response.map(t => TeamService.serializeTeam(t)))
        })
        .catch(next)
    })

    module.exports = TeamRouter