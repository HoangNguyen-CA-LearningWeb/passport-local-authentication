const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const { validPassword } = require('./util');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) return done(null, false, { message: 'User does not exist.' });

      const isValid = await validPassword(password, user.password);
      if (!isValid)
        return done(null, false, { message: 'Invalid password provided.' });

      user.password = undefined; // remove password to send to user
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).select('-password');
    done(null, user);
  } catch (err) {
    done(err);
  }
});
