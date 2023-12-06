const express = require("express");
const router = express.Router();
const User = require("../Models/Userss.model");

router.post("/", (req, res) => {
  const { name, age, address } = req.body;
  const user = new User({
    name,
    age,
    address,
  });
  user
    .save()
    .then((newUser) => {
      res.send(newUser);
    })
    .catch((err) => {
      console.log("Getting error on creating user", err);
    });
});

module.exports = router;
