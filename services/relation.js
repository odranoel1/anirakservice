const { mongoConnection } = require('../db/mongo');

const getMonths = async () => {
    try {
        const client = await mongoConnection();
        const Month = client.db().collection('months');
        const months = await Month.find({}).toArray();

        return months;
    } catch (err) {
        return err;
    }
};

const createMonth = async (month) => {
    const client = await mongoConnection();
    const Month = client.db().collection('months');
    const doc = {
        url: month.url,
        desc: month.desc,
        date: month.date
    };
    const result = Month.insertOne(doc);

    return result;
}

module.exports = {
    getMonths,
    createMonth
};