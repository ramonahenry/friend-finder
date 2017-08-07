var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = 3000;


app.use(express.static(__dirname + "/app/public"));
app.use(bodyParser.urlencoded({ extended: false }));
//format
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.json());



require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);





app.listen(port, function() {
  console.log("Listening on PORT " + port);
});