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

module.exports = router;
