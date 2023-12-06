const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.all("/heartbeat", (req, res) => {
  console.log(req.query, req.params, req.body);
});

const ProductRoute = require("./Routes/Product.route");
const UserRoute = require("./Routes/Users.route");
const MessageRoute = require("./Routes/Message.route");
mongoose
  .connect("mongodb://localhost:27017/admin")
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => console.log("Error:", error));

app.use("/products", ProductRoute);
app.use("/users", UserRoute);
app.use("/message", MessageRoute);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
