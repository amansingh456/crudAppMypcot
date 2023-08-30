const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : Boolean
})

const Userdb = mongoose.model('userdb', userSchema);

module.exports = Userdb;