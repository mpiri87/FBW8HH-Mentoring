const express = require("express");

const app = express();

const port = process.env.port || 3000; // first get the port from the computer or 3000

// make any file inside public folder accessable without creating routes for each file

app.use(express.static(__dirname + "/public")); // only this line to see all dependencise

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html"); //__dirname= absolute path
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`); // this way with backticks is called string incection
});
//test second commit
