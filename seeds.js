var mongoose = require("mongoose");
var Fighter = require("./models/fighter");
var Comment = require("./models/comment");
 
var data = [
    {name: "Tyron Woodley", image: "https://img.favpng.com/1/7/8/tyron-woodley-ufc-214-cormier-vs-jones-2-welterweight-light-heavyweight-bantamweight-png-favpng-YSASNBZw0LctxsGYXMk9UUUCD_t.jpg", description: "A striker known for his rapid rise up the UFC ranks due to his footwork and accuracy"},
    {name: "Conor McGregor", image: "https://pngimg.com/uploads/conor_mcgregor/conor_mcgregor_PNG20.png", description: "A striker known for his rapid rise up the UFC ranks due to his footwork and accuracy"},
    {name: "Kamaru Usman", image: "https://p7.hiclipart.com/preview/945/20/901/kamaru-usman-ufc-fight-night-maia-vs-usman-ufc-fight-night-100-bader-vs-nogueira-ufc-on-fox-17-dos-anjos-vs-cerrone-ufc-219-cyborg-vs-holm-mma-fight.jpg", description: "A striker known for his rapid rise up the UFC ranks due to his footwork and accuracy"},
]
 
function seedDB(){
   //Remove all figthers
   Fighter.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Figthers");
        Comment.deleteMany({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few figthers
            data.forEach(function(seed){
                Fighter.create(seed, function(err, fighter){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a figther");
                        //create a comment
                        Comment.create(
                            {
                                text: "His left hand accuracy was unlike anything ever seen in the Octagon before",
                                author: "Conor"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    fighter.comments.push(comment);
                                    fighter.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;