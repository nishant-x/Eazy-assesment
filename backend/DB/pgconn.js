const pg = require('pg')

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'EazyNodePractice',
    password: 'root',
    port: 5432,

});

pool.connect()
.then(() => console.log("DataBase Connected"))
.catch((err) => console.log(err)) 


module.exports = {
    pool
}