const express = require('express');
const router = express.Router();
const { wrapAsync } = require('../../util');
const passport = require('passport');
const { isAuth } = require('../../middleware');

const AppError = require('../../AppError');

//login route
router.post(
  '/',
  wrapAsync(async (req, res, next) => {
    passport.authenticate('local', function (err, user, info) {
      if (err) return next(err);

      if (!user) return next(new AppError(401, info.message));

      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        res.json(user);
      });
    })(req, res, next);
  })
);

//get authenticated user
router.get('/', isAuth, (req, res) => {
  res.json(req.user);
});

//logout authenticated user
router.post('/logout', isAuth, (req, res) => {
  req.logout();
  res.json({ message: 'Success.' });
});

module.exports = router;
