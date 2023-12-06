const express = require("express");
const router = express.Router();

const Message = require("../Models/Message.model");

router.post("/", (req, res) => {
  const { message, date, sender, receiver } = req.body;
  const newMsg = new Message({
    message,
    date,
    sender,
    receiver,
  });
  newMsg
    .save()
    .then((msg) => {
      res.send(msg);
    })
    .catch((err) => {
      console.log("Getting error on saving msg", err);
    });
});

module.exports = router;
