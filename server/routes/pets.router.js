const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log(req.query);
    pool.query(`SELECT "name", "breed", "color", "first_name", "last_name", "checked_in" FROM "pets"
                LEFT JOIN "owners" ON "owners"."id" = "pets"."owner_id"`
    ).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in get request:', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    console.log('POST /pets', req.body);
    const petToAdd = req.body;
    const queryText = `INSERT INTO "pets" ("name", "breed", "color", "owner_id") 
                       VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [petToAdd.name, petToAdd.breed, petToAdd.color, petToAdd.owner_id])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('ERROR ADDING CREW - POST /crew -', error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('DELETE /pets', req.params);
    const petId = req.params.id;
    pool.query('DELETE FROM "pets" WHERE "id" = $1;', [petId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error making owner delete query', error);
            res.sendStatus(500);
        });
});



module.exports = router;