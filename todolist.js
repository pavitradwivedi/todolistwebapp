const express = require("express");
const bodyParser = require("body-parser");

var items=["eat","sleep","code","repeat"];
workitems=[];

const app=express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
let today= new Date();
var options ={
weekday:"long",
day:"numeric",
month:"long",
};
var day= today.toLocaleDateString("en-us",options);
res.render("list", {listtitle: day, newitem: items});
});


app.post("/",function(req,res)
{ 
    var item=req.body.listitem;

    if(req.body.list==="Work List")
    {
    workitems.push(item);
    res.redirect("/Work");
} 
 
else{
    items.push(item);
    res.redirect("/");
} 

});

app.get("/work",function(req,res)
{res.render("list",{listtitle:"Work List", newitem: workitems})});


app.listen(3000, function() {console.log("server is runnig")});
