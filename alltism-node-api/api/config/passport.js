const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the user model
const Usuario = require('../models/usuario');
const authSecret = require('../.env')
module.exports = function(passport) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: authSecret.authSecret,
  };
  
  const strategy = new JwtStrategy(opts, function(jwt_payload, done) {
    Usuario
      .findByPk(jwt_payload.id)
      .then((user) => { return done(null, user); })
      .catch((error) => { return done(error, false); });
  });

  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));

  passport.use(strategy);
  return {

    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', 'passport-google-oauth', {session: false}),
}

};