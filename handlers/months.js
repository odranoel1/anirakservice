const { getMonths, createMonth } = require("../services/relation");
const { response } = require("../utils/response");

module.exports.getMonths = async () => {
    try {
        const months = await getMonths();
        return response(200, true, 'OK', months);
    } catch (err) {
        return response(400, false, '', err);
    }
};

module.exports.addMonth = async (event) => {
    try {
        const body = JSON.parse(event.body)
        const months = await createMonth(body);
        return response(200, true, 'OK', months);
    } catch (err) {
        console.log(err, 'err');
        return response(400, false, '', err);
    }
};
