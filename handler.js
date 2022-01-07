const { response } = require('./utils/response');
const { getSongs } = require('./services/songs');

module.exports.getSongs = async () => {
  try {
    const songs = await getSongs();
    return response(200, true, 'OK', songs);
  } catch (err) {
    return response(400, false, '', err);
  }
};