// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");




// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// =============================================================
var reservation = [];

// Routes
// Basic route that sends the user first to the Home Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  //path.join is concatenating with view.html
  res.sendFile(path.join(__dirname, "view.html"));
});




app.post('/api/view.html', function (req, res) {
  var newnewreservation = req.body;
  console.log(newnewreservation);
});