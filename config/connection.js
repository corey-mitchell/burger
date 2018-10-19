// Set up MySQL connection
const mysql = require('mysql');

// Create the MySQL connection object
let connection;

if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burgers_db'
	})
};


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