const express = require('express');
const router = express.Router();

const User = require('../../models/User.js');
const { genPassword, wrapAsync } = require('../../util');

const AppError = require('../../AppError');

// register a user
router.post(
  '/',
  wrapAsync(async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username });
    if (foundUser) throw new AppError(400, 'User already exists.');

    const hash = await genPassword(password);
    const user = new User({ username, password: hash });
    const saved = await user.save();

    saved.password = undefined; // dont send password to user
    res.json(saved);
  })
);

module.exports = router;
