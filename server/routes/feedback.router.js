const express = require('express');
const router = express.Router();
const results = [];

router.post('/', (req, res) => {
    const feedbackToAdd = req.body;
    console.log('in POST route', feedbackToAdd);
    const query = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    pool.query(query, [feedbackToAdd.feeling, feedbackToAdd.understanding, feedbackToAdd.support, feedbackToAdd.comments])
    .then(() => {
        console.log('POST - added feedback to db');
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in POST', error);
        res.sendStatus(500);
    });
}); //end POST to db


module.exports = router;