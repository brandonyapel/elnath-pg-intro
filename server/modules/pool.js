var pg = require('pg');

var config = {
    database: 'shoe_store',//name of our database
    host: 'localhost',//where is your database (what computer)
    port: 5432,//the port number for database, 5432 is default
    max: 10,//how many connections at one time
    idleTimeoutMillies: 30000//30 seconds to try to connect to database
};

var pool = new pg.Pool(config);



module.exports = pool;