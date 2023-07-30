const express=require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.set('view engine', 'ejs'); //for ejs- make a "view" folder

var arrim=""
app.listen(3000,function(){
    console.log("done")
})

app.get("/",function(req,res){
    res.render("home")
})


app.get("/about",function(req,res){
  res.render("about")
})

app.get("/service",function(req,res){
  res.render("service")
})


app.get("/centres",function(req,res){
  res.render("centres")
})