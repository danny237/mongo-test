const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("message", MessageSchema);
module.exports = Message;
