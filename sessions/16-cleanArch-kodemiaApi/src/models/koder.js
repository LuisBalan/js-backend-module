// añadir código schema express y mongoose
const mongoose = require('mongoose');


const koderSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true,
    }, 
    lastName:{
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true,
    },
    age: {type: Number, min: 0, max: 120, required: true},
    gender: {
        type: String,
        required: true,
        maxlength: 1,
        enum: ['m', 'f', 'x'],
    }
});

//Creation of model. Collection name and schema are needed.

const Koder = mongoose.model('koders', koderSchema);


module.exports = Koder