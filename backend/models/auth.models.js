const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password:{
      type:String,
      required:true
    },
    image:{
        type:String
    }
   
})

const Authdb = mongoose.model('authdb', authSchema);

module.exports = Authdb;