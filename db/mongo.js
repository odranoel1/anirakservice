const { MongoClient } = require('mongodb');

const options = {
    // useCreateIndex: true,
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
};

module.exports = {
    mongoConnection: async () => {
        const client = await MongoClient.connect(`${process.env.MONGODB_LOCAL_URI}/${process.env.MONGODB_LOCAL_NAME}`, options);
        if (!client) {
            return null;
        }
        console.log(`${client.db().databaseName} is connected`);
        return client;
    }
}