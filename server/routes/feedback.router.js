const express = require('express');
const router = express.Router();
const results = [];

//In theory, this router should send all of the data to the db. Because of the issue with state 
//("cannot read property of undefined"), nothing gets sent to the server so nothing gets sent to the db.
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


//In theory, this router should delete data from the db. Because of the issue with state 
//("cannot read property of undefined"), nothing gets sent to the server so nothing gets sent to the db.
router.delete('/:id', (req, res) => {
    let index = 0;
    for(const item of results) {
        if(req.params.id == item.id) {
            results.splice(index, 1);
            break;
        }
        index += 1;
    }
    res.sendStatus(200);
});

//In theory, this router should get all of the data to the db. Because of the issue with state 
//("cannot read property of undefined"), nothing gets sent to the server so nothing gets sent to the db.
router.get('/', (req, res) => {
    res.send(results);
});

module.exports = router;