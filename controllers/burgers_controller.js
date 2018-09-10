const express = require('express');

const router = express.Router();

// Imports the burger.js model
const burger = require('../models/burger.js');

// Creates routes
router.get('/', (req, res)=>{
    burger.all((data)=>{
        const brgrObject = {
            burger: data
        };
        console.log(brgrObject);
        res.render('index', brgrObject);
    });
});

router.post('/api/burgers', (req, res)=>{
    burger.create([])
});

// Exports router
module.exports = router;