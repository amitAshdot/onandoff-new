const mongoose =require('mongoose');

const FileSchema = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('file', FileSchema);