var express = require("express");
var path = require("path");

var app = express();
var pathReader = require("./models/path-reader");
pathReader.setDirName(__dirname+"/public_html/");

app.set("views","./views");
app.set("view engine","pug");

app.use("/css",express.static(path.join(__dirname,"css")));
app.use("/js",express.static(path.join(__dirname,"js")));

app.get("/",function(req,res){
    pathReader.readHTMLFile("index",res);
});
app.get("/conditionals",function(req,res){
    res.render("condition",{
        
    });
});
app.get("/includes",function(req,res){
    res.render("includes",{
        
    });
});

// template inheritance
app.get("/parent",function(req,res){
    res.render("inheritance/parent",{

    });
});
app.get("/child1",function(req,res){
    res.render("inheritance/child1",{

    });
});
// template inheritance


// template inheritance-append
app.get("/parent-append",function(req,res){
    res.render("inheritance-append/parent",{

    });
});
app.get("/child1-append",function(req,res){
    res.render("inheritance-append/child1",{

    });
});
// template inheritance-append

app.listen(9600,function(){
    console.log("listening on port 9600");
});