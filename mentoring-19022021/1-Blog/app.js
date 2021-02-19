const express = require("express");

const app = express();

const port = process.env.port || 3000; // first get the port from the computer or 3000

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`); // this way with backticks is called string incection
});
//test second commit
