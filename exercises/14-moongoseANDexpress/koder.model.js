const mongoose = require('mongoose');

const koderSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    gender: String,
    age: Number
})
// Creation of model. Collection name and schema are needed.

const Koder = mongoose.model('koders', koderSchema);

module.exports = Koder;