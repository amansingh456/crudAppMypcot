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
    status : String,
    image:{
        type:String,
        required:true
    },
    avatar:String
})

const Userdb = mongoose.model('userdb', userSchema);

module.exports = Userdb;