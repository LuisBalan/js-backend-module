const mongoose = require('mongoose');
const DB_USER = 'luis'
const DB_PASSWORD = 'bln1.618';
const DB_HOST = 'cluster0.jtdjp.mongodb.net';
const DB_NAME = 'kodemia';
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// schema creation
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

mongoose
    .connect(URL)
    .then(async (connection) => {
        console.log('DB Connected!');
        // 
        



        // const newKoder = new Koder({
        //     name: 'Rafa',
        //     lastName: 'Martinez',
        //     age: 18,
        //     gender: 'm'
        // })
        // await Koder.create(newKoder)

        await Koder.create({
            name: 'Marco',
            lastName: 'Fernandez',
            age: 18,
            gender: 'm'
        })

        await Koder.create({
            lastName: 'Lopez',
            age: 18,
            gender: 'masculino'
        })

                
        const koders = await Koder.find({});
        console.log(koders)

    })
    .catch((error) => {
        console.error(error)
    })

