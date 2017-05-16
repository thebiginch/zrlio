var path = require("path");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var express = require("express");
var app = express();
var build = path.join(__dirname, "../build");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use(express.static(`${build}`));

app.get("/", function(req, res) {
  res.sendFile(`${build}/index.html`);
});

app.post("/mail", function(req, res) {
  console.log(req.body.contactName);

  res.send("got it");
});

app.listen(3001, function() {
  console.log("listening on port 2345");
});
