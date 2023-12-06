const express = require("express");
const router = express.Router();

const Product = require("../Models/Product.model");

router.post("/", (req, res) => {
  const { name, price } = req.body;

  const product = new Product({ name, price });
  product
    .save()
    .then((result) => {
      console.log("Result", result);
      res.send(result);
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
});

module.exports = router;
