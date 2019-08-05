const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artifactSchema = Schema({
    name: {type: String, require: true},
    location: {type: String, require: true},
    architect: String,
    year: Number,
    style: String,
    tags: Array,
    history: String,
    img: String,
    img2: String,
    img3: String
});

const Artifact = mongoose.model('Artifact', artifactSchema);

module.exports = Artifact;