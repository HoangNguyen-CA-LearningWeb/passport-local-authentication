const express = require('express');
const router = express.Router();
const { wrapAsync } = require('../../util');
const AppError = require('../../AppError');

router.get(
  '/',
  wrapAsync(async (req, res) => {
    if (req.session.visits) {
      req.session.visits++;
    } else {
      req.session.visits = 1;
    }
    console.log(req.session);
    res.send(req.session);
  })
);

module.exports = router;
