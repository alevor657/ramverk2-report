const express = require('express');
const connect = require('./connection').connect;
const disconnect = require('./connection').disconnect;
const ObjectId = require('mongodb').ObjectId;
let router = express.Router();

let col;

router.use(async (req, res, next) => {
    col = await connect();
    next();
    await disconnect();
});

router.get('/users', async (req, res) => {
    let data = await col.find().toArray();

    res.json(data);
});

router.post('/users', async (req, res) => {
    let data = req.body;

    data._id = new ObjectId();
    await col.insert(data);
    res.end();
});

router.patch('/users/:userId', async (req, res) => {
    const { userId } = req.params;
    const { name, place, age } = req.body;

    await col.updateOne(
        {'_id': ObjectId(userId)},
        {
            $set: {
                name,
                place,
                age
            }
        }
    );

    res.end();
});

router.delete('/users/:userId', async (req, res) => {
    let { userId } = req.params;

    await col.removeOne({'_id': ObjectId(userId)});
    res.end();
});

module.exports = router;
