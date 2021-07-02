const bcrypt = require('bcrypt');

const wrapAsync = (action) => (req, res, next) =>
  action(req, res, next).catch(next);

const genPassword = async (plainText) => {
  const saltRounds = 12;
  const hash = await bcrypt.hash(plainText, saltRounds);
  return hash;
};
const validPassword = async (pw, hash) => {
  const match = await bcrypt.compare(pw, hash);
  return match;
};

module.exports = {
  wrapAsync,
  validPassword,
  genPassword,
};
