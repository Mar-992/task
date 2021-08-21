const mongoose = require('mongoose');

const dogSchema = mongoose.Schema({
    breed:{
        type: String,
        required:["Breed is a required field"]
    },
    image:{
        type: String
    }
})

module.exports = mongoose.model('Dog', dogSchema, 'dogs')