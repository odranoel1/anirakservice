const { ObjectId } = require('mongodb');
const { mongoConnection } = require('../db/mongo');

const getTasks = async () => {
    try {
        const client = await mongoConnection();
        const Picture = client.db().collection('pictures');
        const pictures = await Picture.find({}).sort({ createdAt: -1 }).toArray();
        return pictures;
    } catch (err) {
        return err;
    }
};

const createTask = async (task) => {
    const client = await mongoConnection();
    const Picture = client.db().collection('pictures');
    const res = Picture.insertOne(task);
    return res;
};

const deleteTask = async (taskId) => {
    const client = await mongoConnection();
    const Picture = client.db().collection('pictures');
    const res = Picture.deleteOne({ '_id': new ObjectId(taskId) });
    return res;
};

const editTask = async (taskId, data) => {
    const filter = { '_id': new ObjectId(taskId) };
    const values = { $set: { ...data } };
    const client = await mongoConnection();
    const Picture = client.db().collection('pictures');
    const res = await Picture.updateOne(filter, values);
    return res;
};

module.exports = {
    createTask,
    getTasks,
    deleteTask,
    editTask
};
