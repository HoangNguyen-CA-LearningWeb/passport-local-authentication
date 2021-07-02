const express = require('express');
const router = express.Router();
const { wrapAsync } = require('../../util');
const passport = require('passport');
const AppError = require('../../AppError');

router.post(
  '/',
  passport.authenticate('local'),
  wrapAsync(async (req, res) => {
    res.send(req.user);
  })
);

router.get('/', (req, res) => {
  res.send('hello this is the auth route.');
});

module.exports = router;
