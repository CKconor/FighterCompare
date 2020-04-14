var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const port = 3000;



app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var fighters = [
    {name: "Tyron Woodley", image: "https://img.favpng.com/1/7/8/tyron-woodley-ufc-214-cormier-vs-jones-2-welterweight-light-heavyweight-bantamweight-png-favpng-YSASNBZw0LctxsGYXMk9UUUCD_t.jpg"},
    {name: "Conor McGregor", image: "https://pngimg.com/uploads/conor_mcgregor/conor_mcgregor_PNG20.png"},
    {name: "Kamaru Usman", image: "https://p7.hiclipart.com/preview/945/20/901/kamaru-usman-ufc-fight-night-maia-vs-usman-ufc-fight-night-100-bader-vs-nogueira-ufc-on-fox-17-dos-anjos-vs-cerrone-ufc-219-cyborg-vs-holm-mma-fight.jpg"},
];

//setup routes
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/fighters", function(req, res){
    

    res.render("fighters",{fighters:fighters});
});

app.post("/fighters", function(req, res){
    //get form data and add to array
    var name = req.body.name;
    var image = req.body.image;
    var newFighter = {name: name, image: image}
    fighters.push(newFighter);
    //redirect back to campground
    res.redirect("/fighters");
});

app.get("/fighters/new", function(req, res){
    res.render("new.ejs");
});

app.listen(port, function(){
    console.log("Server Started")
});
