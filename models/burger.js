// Imports the ORM
const orm = require('../config/orm.js');

// Calls ORM
const burgers = {
    all: (cb)=>{
        orm.all('burgers', (res)=>{
            cb(res);
        });
    },
    create: (cols, vals, cb)=>{
        orm.create('burgers', cols, vals, (res)=>{
            cb(res);
        });
    },
    update: (objColVals, condition, cb)=>{
        orm.update('burgers', objColVals, condition, (res)=>{
            cb(res);
        });
    }
};

// Exports the database functions
module.exports = burgers;