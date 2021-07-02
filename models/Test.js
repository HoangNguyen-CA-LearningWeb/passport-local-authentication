const mongoose = require('mongoose');

testSchema = new mongoose.Schema({
  name: string,
});

module.exports = Test = mongoose.model('Test', testSchema);
