 

module.exports = function(app){
 
  // autenticacion con facebook 
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: 1024972257917510,
    clientSecret: '47bd5c5067480097099c0f32f77ec44b',
    callbackURL: "http://localhost:3000/"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(profile, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

  
   
// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/facebook', passport.authenticate('facebook'));

 
// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
 
 app.get('/facebook',
 passport.authenticate('facebook', { scope: 'read_stream' })
);   


app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
});

};


 