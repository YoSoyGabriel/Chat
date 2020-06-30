const mongoose = require('mongoose');
// var url = 'mongodb+srv://chat-ninja:<jgLWH5IVjRuxbEYg>@cluster0-gnjat.mongodb.net/<ninjas>?retryWrites=true&w=majority'; 
// mongoose.connect(url); 
const bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
      name           : String,
      provider_id    : {type : String, unique: true},
      photo          : String,
      createdAt      : {type : Date, defualt : Date.now}

});

 

var user  = mongoose.model('usuarios', userSchema);

module.exports = user ; 