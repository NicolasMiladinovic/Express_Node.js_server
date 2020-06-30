var express = require("express");
const { response } = require("express");
var app = express();

/* Route / (index) */
app.get("/", function (request, resolve) {
    resolve.sendFile(__dirname + '/index.html')
});

/* Route /status */
app.get("/status", function (request, resolve) {
    resolve.send("OK");
});

var port = 1337;
app.listen(port, function () {
    console.log("Express Node.js server running on port 1337.");
});