const mongo = require("mongodb").MongoClient;
const dsn = process.env.DBWEBB_DSN || "mongodb://127.0.0.1:27017/users";

let db;

const connect = async () => {
    try {
        db = await mongo.connect(dsn);
    } catch (e) {
        throw e;
    }

    let col = await db.collection('users');

    return col;
};

const disconnect = async () => {
    await db.close();
};

module.exports = {
    connect,
    disconnect
};
