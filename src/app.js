'use strict';

var express = require('express');

var app = express();

var PORT = 3000;

app.listen(3000, listenFunc);


function listenFunc() {
    console.log("The server is running on port 3000!");
}