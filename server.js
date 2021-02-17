// Declare the dependencies
var express = require('express');
var exphbs = require("express-handlebars");

// Declare the port
var PORT = process.env.PORT || 3036;

// Set the variable app to use express
var app = express();

// Set the static files directory for the client
app.use(express.static("public"));

// Middleware to handle the encoding of the requests and convert to JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the view engine to handlebars and use the main.handlebars as the default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import the burgers controller
var router = require("./controllers/burgers_controller.js");

// Set express to use the burgers controller
app.use(router);

// Start express to listen on the port declared above
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});