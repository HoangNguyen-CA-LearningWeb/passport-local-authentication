const express = require('express');
const router = express.Router();
const { wrapAsync } = require('../../util');
const passport = require('passport');
const AppError = require('../../AppError');

router.post(
  '/',
  passport.authenticate('local'),
  wrapAsync(async (req, res) => {
    console.log(req.user);
    res.send(req.user);
  })
);

router.get('/', (req, res) => {
  res.json(req.session);
});

module.exports = router;
