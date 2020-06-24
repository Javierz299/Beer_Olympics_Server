express = require('express')

const PlayerRouter = express.Router()
const jsonBodyParser = express.json()
const pool = require('../db')

PlayerRouter
    .post('/', jsonBodyParser, async (req,res,next) => {

        const values = await [req.body.full_name, req.body.nickname, req.body.password]
        console.log(values)

        try{
        await pool.query(`INSERT INTO players(full_name, nickname, password)
        VALUES($1, $2, $3)`,
        values,
        (q_err, q_res) => {
            if(!q_err){
                console.log('json reached')
                return res.json(q_res.rows)
            } else {
                console.log('reached',q_err)
                return next(q_err)
            }
            
        }
    
    )
    next()
} catch(err){
    next(err)
}
        
})




    module.exports = PlayerRouter