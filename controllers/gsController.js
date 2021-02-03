// https://googleapis.dev/nodejs/storage/latest/File.html#get

const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
const myBucket = storage.bucket('ptasystemdesign');

module.exports = {
    findPdf: function (req, res) {
        const file = myBucket.file(req.params.id);
        file.get()
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
};
