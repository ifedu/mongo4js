"use strict";

module.exports = function () {
    var express = require("express");

    var app = express();
    var server = require("http").Server(app);

    app.use(express["static"]("./build"));

    app.use("*", function (req, res) {
        res.sendFile("./build/index.html");
    });

    require("./connectdb.js")();

    server.listen(8001, function () {
        return console.log("Listening on port %d", server.address().port);
    });
};