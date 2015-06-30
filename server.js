var express = require("express");

var app = express();

app.use(express.static('.'));

var port = process.env.port || 3000;
app.listen(port);
