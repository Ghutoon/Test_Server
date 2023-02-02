const express = require("express");
const logger = require("./logger");
const exp = express();
const port = 8080;

exp.use(express.json());
exp.use(
  express.urlencoded({
    extended: true,
  })
);

exp.get("/", (req, res) => {
  logger.log("debug", "Hello, World!");
  logger.debug("The is the home '/' route.");
  res.send("Hello World");
});

exp.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
