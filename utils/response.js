module.exports.response = (statusCode, success, message, data = {}) => {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        statusCode,
        body: JSON.stringify({
            statusCode,
            success,
            message,
            data
        }, null, 2)
    };
};