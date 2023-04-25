const express = require("express");

const app = express();

app.get("/", (response, require) => {
  response.send("Express JS");
});

module.exports = app;
