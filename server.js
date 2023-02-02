const express = require("express");
const logger = require("./logger");
const exp = express();
const PORT = 8080;

exp.use(express.json());
exp.use(
  express.urlencoded({
    extended: true,
  })
);

exp.get("/", (req, res) => {
  logger.log("debug", "Hello, \n\n\nWorld!");
  logger.log(
    "debug",
    `test
  
  12345
  abcde`
  );
  logger.debug("The is the home '/' route.");
  res.send("Hello World");
});

exp.listen(port, () => {
  console.log(`Server running on port ${PORT}`);
});
