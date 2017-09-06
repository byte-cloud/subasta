var mongoose = require('mongoose');
var Category = require('./models/Categories');

module.exports = function () {
    // Category.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log("Removed all categories");
    // });
    Category.find({}, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        if(data.length == 0){

            Category.create({name: "Electronics" }, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name: "Clothing"}, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name: "Furniture"}, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name: "Artifacts"}, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name:"Accessories" }, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name: "Jewellery"}, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name: "Footwear"}, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name: "Property"}, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name: "Machines"}, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name:"Vehicle" }, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name: "Sports"}, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name: "Liquor"}, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name: "Stationery"}, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                // console.log("Added category" + data.name);
            });
            Category.create({name: "Musicals"}, function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                console.log("Added all categories");
            });
        }
    });
}