const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log(req.query);
    pool.query(`SELECT * FROM "pets"`
    ).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in get request:', error);
        res.sendStatus(500);
    });
});

module.exports = router;