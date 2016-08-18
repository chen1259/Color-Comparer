var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});


// "/bye/" => "Goodbye1"
app.get("/bye", function(req, res) {
    res.send("Goodbye");
});

// "/dog" =?"Meow"
app.get("/dog", function(req,res) {
    res.send("Meow");
});

app.get("*", function(req, res) {
    res.send("Wrong page yo");
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});