const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
const port=process.env.PORT || 8000;




const PathFile=path.join(__dirname,"../public");
const templet_path=path.join(__dirname,"../templates/views/");
const partials_path=path.join(__dirname,"../templates/partials/");

app.set('view engine', 'hbs');
app.set('views',templet_path);
hbs.registerPartials(partials_path);

app.use(express.static(PathFile));

app.get("/",(req,res)=>{
     res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("/contact",(req,res)=>{
    res.render("contact")
});
app.get("*",(req,res)=>{
    res.render("404");
});
app.listen(port,()=>{
    console.log(`Running port ${port}`);
});