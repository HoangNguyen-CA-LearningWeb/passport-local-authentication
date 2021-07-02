const express = require('express');
const router = express.Router();

const User = require('../../models/User.js');
const { genPassword, wrapAsync } = require('../../util');

// register a user
router.post(
  '/',
  wrapAsync(async (req, res) => {
    const { username, password } = req.body;
    const hash = await genPassword(password);
    const user = new User({ username, password: hash });
    const saved = await user.save();
    res.json(saved);
  })
);

module.exports = router;
