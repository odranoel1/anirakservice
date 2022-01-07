const { createPresignedUrl } = require("../services/s3");
const { response } = require("../utils/response");

module.exports.main = async event => {
    try {
        const body = JSON.parse(event.body);
        const postObj = createPresignedUrl(body.img);
        return response(200, true, 'OK', postObj);
    } catch (err) {
        return response(400, false, '', err);
    }
};