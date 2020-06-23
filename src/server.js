const app = require('./app')
require('dotenv').config()

const { PORT } = require('./config')

app.use((err,req,res,next) => {
    let response


    if(process.env.NODE_ENV === "production"){
        response = { error: { message: 'server error'}}
    } else { 
        response = { error }
    }
    res.status(500).json(response)
})
app.listen( PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})
