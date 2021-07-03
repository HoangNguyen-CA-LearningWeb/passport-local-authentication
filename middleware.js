const AppError = require('./AppError');

//Authentication middleware

module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    // given by passport
    next();
  } else {
    next(new AppError(401, 'Not authorized.'));
  }
};
