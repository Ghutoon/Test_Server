const express = require('express');
const exp = express();
const port = 8080;

exp.use(express.json());
exp.use(
  express.urlencoded({
    extended: true,
  })
);

exp.get("/", (req, res) => {
  res.send("Hello World");
});