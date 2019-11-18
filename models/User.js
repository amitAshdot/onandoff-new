const mongoose =require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },    
    password:{
        type:String,
        required:true
    },    

    vkey:{
        Type:String
    },
    verified:{
        Type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now
    },
    isAdmin:{
        type:Boolean,
        default:false        
    },
});

module.exports = mongoose.model('user', UserSchema);