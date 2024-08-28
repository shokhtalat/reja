console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) =>{
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});
// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");


// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code

// 3: Views
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing
/*
app.get("/hello", function(req, res) {
    res.end(`<h1 style="background: blue">HELLO WORLD by Tyler</h1>`);
}); 
app.get("/gift", function (req, res){
    res.end(`<h1>Siz sovg'alar bo'limidasiz!</h1>`)
})
*/

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) }, 
        { $set: {Reja: data.new_input }}, 
        function(err, data){
            res.json({state: "success"})
    })
    //res.end("done");
});

app.post("/create-item", (req, res) =>{
    console.log("user entered /create-item"); 
    // TODO: code with db here
    console.log(req.body);
    const new_reja = req.body.Reja;
    db.collection("plans").insertOne({ Reja: new_reja }, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });

});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    //console.log(id);
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
        res.json({state: "success"});
    });
});
app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function() {
            res.json({state: "hamma rejalar ochirildi"});
        });
    }
});
app.get('/author', (req, res) => {
    console.log("user entered /author ");
    
    res.render("author", {user: user});
});

app.get('/', function (req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            // console.log(data);
            res.render("reja", {items: data});
        }
    });
   
});

 module.exports = app;