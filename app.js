const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/about", function(req, res) {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/gallery", function(req, res) {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function() {
  console.log("Running on port 3000!");
});
