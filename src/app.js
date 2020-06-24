const express = require('express')

require('dotenv').config()

const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')

const PlayerRouter = require('./player/player-route')

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet())
app.use(cors());


app.use('/api/player', PlayerRouter)



module.exports = app;