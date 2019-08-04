//dependencies setting
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;

//express.js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("Listening on PORT: " + PORT);
});