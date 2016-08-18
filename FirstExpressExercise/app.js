var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    var sound = "";
    if(animal === "pig") {
        sound = "Oink";
    } else if (animal === "cow") {
        sound = "Moo";
    } else if (animal === "dog") {
        sound = "Woof Woof!";
    }
    
    res.send("\"The " + animal + " says \'" + sound + "\'\"");
});

app.get("/repeat/:quote/:number", function(req, res) {
    var num = req.params.number;
    var quote = req.params.quote;
    var final = "";
    
    for(var i = 0; i < num; i++) {
        if(i === 0) {
            final += quote;
        } else {
            final += " " + quote;
        }
    }
    res.send(final);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});