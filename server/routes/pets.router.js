const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log(req.query);
    pool.query(`SELECT "name", "breed", "color", "first_name", "last_name" FROM "pets"
                LEFT JOIN "owners" ON "owners"."id" = "pets"."owner_id"`
    ).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in get request:', error);
        res.sendStatus(500);
    });
});

module.exports = router;