// set up connection to mySQL
var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    // db for JAWSDB for Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { 
    //db for localhost
    connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '1Password!324',
    database: 'burgers_db'
    })
};


// make connection (success or fail)
connection.connect(function(err) {
    if (err) {
        console.log('Error Connecting: ' + err.stack + '\n');
        return;
    }
    console.log('Connection Succes as ID: ' + connection.threadId + '\n');
});

// export out the connection for our ORM
module.exports = connection;