const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST /owners', req.body);
    const owner = req.body;
    const queryText = `INSERT INTO "owners" ("first_name", "last_name") VALUES ($1, $2)`;
    pool.query(queryText, [owner.first_name, owner.last_name])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error making owner insert query', error);
            res.sendStatus(500);
        });
});


router.get('/', (req, res) => {
    console.log('GET /owners');
    pool.query(`SELECT "owners"."id","first_name", "last_name", COUNT("pets"."id")
                FROM "owners"
                LEFT JOIN "pets" ON "owners".id = "pets"."owner_id"
                GROUP BY "owners"."id";`)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('ERROR SELECTING OWNERS - GET /owners -', error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('DELETE /owners', req.params);
    const ownerId = req.params.id;
    pool.query('DELETE FROM "owners" WHERE "id" = $1;', [ownerId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error making owner delete query', error);
            res.sendStatus(500);
        });
});

module.exports = router;