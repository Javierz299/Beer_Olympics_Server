const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'beer-olympics',
    password: 'Tucker15!',
    port: 5432
})

module.export = pool