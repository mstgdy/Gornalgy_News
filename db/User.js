var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs');

var schema = mongoose.Schema;

var userSchema = new schema({
 name:{
        type:String,
        required:true,
    },
    apiname: [String]


,

    username:{
        type:String,
        required:true,
    },
    password: {
        type: String,
        required: true,
    },
     hash:String
})

userSchema.methods.hashPassword = function (password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function (password,hash) {
    return bcrypt.compareSync(password,hash)
}

module.exports = mongoose.model('users',userSchema);