var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
    //company: {type: mongoose.Schema.ObjectId, required: false},
    username: String,
    password: String
});

// Se encarga de manejar las contraseñas de forma segura:
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('UserModel', userSchema);
