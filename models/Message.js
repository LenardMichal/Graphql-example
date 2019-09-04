const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  author: {
    required: true,
    type: String
  },
  content: String
})

module.exports = mongoose.model('Message', messageSchema);