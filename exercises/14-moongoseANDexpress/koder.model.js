const mongoose = require('mongoose');

const koderSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    gender: String,
    age: Number
})

const Koder = mongoose.model('koders', koderSchema);