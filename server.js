var express = require("express");

var app = express();

app.use(express.static('.'));

app.get("/", function (req, res) {
	res.send("Hello World JS");
});


var port = process.env.port || 3000;
app.listen(port);

