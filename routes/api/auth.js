const express = require('express');
const router = express.Router();
const { wrapAsync } = require('../../util');
const passport = require('passport');
const AppError = require('../../AppError');
const { isAuth } = require('../../middleware');

router.post(
  '/',
  passport.authenticate('local'),
  wrapAsync(async (req, res) => {
    res.json(req.user);
  })
);

router.get('/', isAuth, (req, res) => {
  res.json(req.user);
});

module.exports = router;
