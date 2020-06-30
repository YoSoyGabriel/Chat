// import packages
var socket = require('socket.io'); 
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var ejs = require('ejs');
var path = require('path');
var app = express(); 
var port = process.env.PORT ||  3000; 

var mongoose = require('mongoose');

var config = require('./config/config');

require('./config/password')(passport);
require('./model/user');

var cookieParser = require('cookie-parser');

mongoose.connect(config.facebook.MONGO_DB_STRIN), function (err, res){
    if (err) throw (err); 
    console.log('conectado a mongoDB Atlas');
}; 


app.use('/cuenta', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// set ejs engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(cookieParser());
// express.use(con.urlencoded());
// express.use(con.methodOverrride());

app.use(session({
    secret : 'ninjas',
    resave : true,
    saveUninitialized : true
}))


app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
   res.render('index'); 
});

 app.get('/cuenta', (req, res) => {
         res.render('pages/cuenta');
  });

app.get('/cuenta/invitado', (req, res) => {
    res.render('pages/cuenta', {user : user = { name : 'Ninja_' + Math.round(Math.random() * 10000000)  }});
});


 app.get('/auth/facebook',
  passport.authenticate('facebook'));

  app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/cuenta',
                                      failureRedirect: '/' }));


  app.get('/logout', function ( req, res){
       res.redirect('/');
  });                                    


// create a server using express 
// listen to port 3000

const server = app.listen(port, () =>{
  console.log('listening on port 3000');
});


 var io = socket(server); 

 io.on('connection',function(socket) {
   console.log('socket connected'  + socket.id); 
      socket.on('chat', function(data){
          io.emit('chat', data)
      });

     socket.on('typing', function(data){
         socket.broadcast.emit('typing', data);
     });  

 });


 