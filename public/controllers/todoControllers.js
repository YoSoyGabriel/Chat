
module.exports = function(app){
 
  // autenticacion con facebook 
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: 1024972257917510,
    clientSecret: '47bd5c5067480097099c0f32f77ec44b',
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(accessToken);
     console.log(profile);
  //   User.findOrCreate({ facebookId: profile.id }, function (err, user) {
  //     return cb(err, user);
  //   });
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
  passport.authenticate('facebook', {failureRedirect: '/' }), 
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/cuenta');
  });
    


app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

};


 