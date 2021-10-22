const s3Service = require('./s3');

const getSongs = async () => {
    const data = await s3Service.listObjects('data/songs/');
    const songs = [];
    for (let i = 1; i < data['Contents'].length; i++) {
        songs.push(data['Contents'][i]['Key'].replace('data/songs/', ''));
    }
    return songs;
};

module.exports = {
    getSongs
};
