const express=require("express")
const app=express()

const hbs=require("hbs")
const path=require("path")


app.set("view engine","hbs")
hbs.registerPartials(path.join(__dirname + '/views/partials'))
app.use(express.static(path.join(__dirname,"/views/public")))
app.get("/",(req,res)=>{
   return res.render("index")
})

app.listen(80,"localhost",console.log("Server is Running on Port 80"))