// Set up MySQL connection
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    });
};

console.log(connection);

// Make connection
connection.connect((err)=>{
    if(err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    };
    console.log(`connected as id ${connection.threadId}`);
});

// Exports connection
module.exports = connection;