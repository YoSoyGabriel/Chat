 
 
var mongoose = require('mongoose');
var User = require('../model/user.js'); 
var credenciales = require('./config'); 
const { use } = require('passport');
var  FacebookStrategy = require('passport-facebook').Strategy;
 
 
module.exports = function (passport) {
   
  passport.serializeUser(function (user, done) {
     done(null, user.id);
  });

  passport.deserializeUser(function (user, done) {
  //  User.findById(id, function (err, user) {
       done(null, user);
  //  });
 });


  passport.use(new FacebookStrategy({
    clientID: credenciales.facebook.FACEBOOK_CLIENT_ID  ,
    clientSecret: credenciales.facebook.FACEBOOK_SECRECT ,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName',  'photos', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({provider_id: profile.id  }, function (err, user) {
          if(err) throw (err);

          if(!err && user != null ) return done ( null, user)
          
          var user = new User({
            name         : profile.displayName,
            provider_id  : profile.id,
            photo        : profile.photos[0].value,

          });

          user.save(function(err) {
               if(err) throw err;
               done(null, user);
          });

    });
  }
));
 
 
}