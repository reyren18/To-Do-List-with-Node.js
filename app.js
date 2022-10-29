const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

let tasks = [];

app.set("view engine", "ejs"); // use ejs as view engine

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public")); // telling the server to look for all our static files in this folder

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { typeOfDay: day , newListItems: tasks });
});

app.post("/", function(req, res){
  let newTask = req.body.task;
  tasks.push(newTask);
  res.redirect("/"); // redirecting control to root since the render needs to be together
})

app.listen(4000, function () {
  console.log("Server is running");
});
