const express=require("express")
const app=express()
const path = require("path");
const methodoverride=require("method-override")
const ejsMate = require('ejs-mate');

app.use(methodoverride('_method'));
app.set("views engin","/views")
app.set("views",path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname,"/public")))
app.engine("ejs",ejsMate);


app.get('/', (req, res) => {
    res.render("index.ejs");
});


app.listen(3000,()=>{
    console.log("server runnin....");
})