express = require('express')

const PlayerRouter = express.Router()
const jsonBodyParser = express.json()
const pool = require('../db')

PlayerRouter
    .post('/', jsonBodyParser, async (req,res,next) => {
        const r = await req.body
        const values = [r.full_name, r.nickname, r.password]
        pool.query(`INSERT INTO players(full_name, nickname, password)
            VALUES($1, $2, $3, $4)`,
            values,
            (q_err, q_res) => {
                if(q_err){
                    return next(q_err)
                }
                console.log(res.json(q_res.rows))
            }

        )
    })

    module.exports = PlayerRouter