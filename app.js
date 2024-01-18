var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');

//connect to mongodb via mongoose
mongoose.connect("mongodb://0.0.0.0:27017/WebAPI",{
}).then(function(){
    console.log("Connected to MongoDB Database");
}).catch(function(err){
    console.log(err);
});

//var num = 6*6;

//console.log(num);

//Image of Static Route
app.use(express.static(__dirname+'/pages'))

//javascript for a route
app.get('/', function(req,res){
    //res.send("here would be the page from the route");
    res.sendFile(path.join(__dirname+"/pages/index.html"))
});

app.get('/login', function(req,res){
    //res.send("here would be the page from the route");
    res.sendFile(path.join(__dirname+"/pages/login.html"))
});

app.get('/add', function(req,res){
    //res.send("here would be the page from the route");
    res.sendFile(path.join(__dirname+"/pages/add.html"))
});

var Schema = mongoose.Schema;

var GameData = new Schema({
    gamename:{
        type:String
    }
    //gameName:String,
    //gameStudio:String
});

var gameModel = mongoose.model("gameModel", GameData);

app.get("/getdata", function(req, res){
    gameModel.find({}).then(function(games){
        res.json({gameData});
    });
});

app.listen(3000, function(){
    console.log("Running On Port 3000")
})