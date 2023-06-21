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

app.post('/print', (req, res) => {
  arrim = req.body.photo;
  console.log(arrim,"arrim")
})
app.get("/process",function(req,res){
  console.log("done")
  
  res.render("process")

});

app.get("/done",function(req,res){
  
  res.render("done",{arrim:arrim})
})

app.get("/about",function(req,res){
  res.render("about")
})

app.get("/cost",function(req,res){
  res.render("cost")
})

app.get("/choose",function(req,res){
  res.render("choose")
})

app.get("/print",function(req,res){
  res.render("index")
})