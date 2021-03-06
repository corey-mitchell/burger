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
        // console.log(brgrObject);
        res.render('index', brgrObject);
    });
});

router.post('/api/burger', (req, res)=>{
    // console.log(req.body.burgerName);
    burger.create(
        'burger',
        [req.body.burgerName],
        (result)=>{
            console.log(result);
            res.json({ id: result.insertId })
        }
    );
});

router.put("/api/burger/:id", (req, res)=>{
    const condition = `id = ${req.params.id}`;

    // console.log(req.body.devoured);

    burger.update({
        devoured: req.body.devoured
    }, condition, (result)=>{
        if(result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    });
});

// Exports router
module.exports = router;