const AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const Bucket = process.env.AWS_S3_BUCKET;
const Expires = 60 * 60;
const folder = 'data/memories';
const Key = 'data.json';

const createPresignedUrl = (img) => {
    const key = `${folder}/${img.name}`;
    return s3.createPresignedPost({
        Bucket,
        Fields: {
            'Content-Type': img.mimeType,
            Key: key,
        },
        Expires,
        Conditions: [
            { 'Content-Type': img.mimeType },
            { 'acl': 'public-read' },
            ['starts-with', '$key', key]
        ],
    });
};

const listObjects = () => {
    return s3.listObjects({
        Bucket,
        Delimiter: '/',
        Prefix: 'data/songs/'
    }).promise();
};

const getObject = () => {
    return s3.getObject({
        Bucket,
        Key,
    }).promise();
};

const updateObj = (data) => {
    return s3.upload({
        Bucket,
        Key,
        Body: Buffer.from(JSON.stringify(data)),
        ContentType: 'application/json',
    }).promise();
};

module.exports = {
    listObjects,
    getObject,
    updateObj,
    createPresignedUrl
};