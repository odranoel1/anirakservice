const { MongoClient } = require('mongodb');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = {
    mongoConnection: async () => {
        const testurl = process.env.MONGO_PROD_URI;
        const uriLocal = `${process.env.MONGODB_LOCAL_URI}/${process.env.MONGODB_LOCAL_NAME}`;
        const client = await MongoClient.connect(uriLocal, options);
        if (!client) {
            return null;
        }
        console.log(`${client.db().databaseName} is connected`);
        return client;
    }
}