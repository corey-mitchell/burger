// Imports connection.js
const connection = require('./connection.js');

// Executes MySQL commands
const orm ={
    all: (tableInput, cb)=>{
        const queryString = `SELECT * FROM ${tableInput};`;

        connection.query(queryString, (err, res)=>{
            if (err) throw err;

            cb(res);
        });
    },
    create: (table, cols, vals, cb)=>{
        const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(val.length)})`;

        console.log(queryString);

        connection.query(queryString, vals, (err, res)=>{
            if (err) throw err;

            cb(res);
        });
    },
    update: (table, objColVals, condition, cb)=>{
        const queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;

        console.log(queryString);
        connection.query(queryString, (err, res)=>{
            if (err) throw err;
            cb(res);
        });
    }
};

// Exports ORM
module.exports = orm;