const mongoose = require('mongoose');

const dogSchema = mongoose.Schema({
    id:{
        type: String,
        required:["Id is a required field"]
        
    },
    breed:{
        type: String,
        required:["Breed is a required field"]
    }
})

module.exports = mongoose.model('Dog', dogSchema)