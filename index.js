const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Made by mee!for you hehe1234567890 ");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});