// Imports connection.js
const connection = require('./connection.js');


const printQuestionMarks = (num) => {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      const value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {devoured: true} => ["devoured=true"]
        arr.push(key + "=" + value);
      }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
};

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
        const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
        // console.log(queryString);

        connection.query(queryString, vals, (err, res)=>{
            if (err) throw err;

            cb(res);
        });
    },
    update: (table, objColVals, condition, cb)=>{
        console.log(objColVals);
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