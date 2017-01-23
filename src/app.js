'use strict';

// variables
var express = require('express');
var app = express();
var router = express.Router();

var PORT = 3000;

// namespace
app.use('/', express.static('public'));
app.use('/api', router)

// routes
router.get('/todos', todoRoute);




app.listen(3000, listener);


// functions
function listener() {
    console.log("The server is running on port 3000!");
}

function todoRoute(req,res) {
    var testJSON = {todos:[]};
    res.send(testJSON);
}