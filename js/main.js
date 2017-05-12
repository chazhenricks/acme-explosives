"use strict";

console.log("MAIN.JS");

var Handlebars = require('hbsfy/runtime'),
    Categories = require("./categories.js"),
    Products = require("./products.js"),
    Types = require('./types.js'),
    fireworkTemplate = require('../templates/fireworks.hbs'),
    demolitionTemplate = require("../templates/demo.hbs"),
    selectTemplate = require('../templates/select.hbs');


let allObj = {};

var populateSelect = function(){
    let selectData =
    {
        "categories" : [
        {"name":allObj.categories[0].name},
        {"name": allObj.categories[1].name}
        ]
    };
    $("#select-box").append(selectTemplate(selectData));
    populateTable();
};

var populateTable = function(){
    var tableData = allObj;
    Handlebars.registerHelper({eq: function (v1, v2) {
        return v1 === v2;
    }});

    $("#select-btn").click(function(){
        if($("#select-box")[0].value === "0"){
            $("#table").html("");
            $("#table").append(fireworkTemplate(tableData));
        }else if($("#select-box")[0].value === "1"){
            $("#table").html("");
            $("#table").append(demolitionTemplate(tableData));
        }
    });
};


Categories.getCategories().then(
    function(data){
    allObj.categories = data;
    },
    console.error()
);

Products.getProducts().then(
    function(data){
    allObj.products = data;
    },
    console.error()
);
Types.getTypes().then(
    function(data){
    allObj.types= data;
    console.log("allObj", allObj);
    populateSelect();
    },
    console.error()
);



module.exports = allObj;






















//     categoryArray = data;

//     for (var i=0;i<categoryArray.length;i++){
//         var optionsInfo =`<option id="opt-${i}" value="${categoryArray[i].id}">${data[i].name}</option>`;
//         $("#select-box").append(optionsInfo);
//     }

// })
// .then(function(){
//     $("#select-btn").click(function(){
//         if($("#select-box")[0].value === "0"){
//             console.log("zero");
//             populateFireworks();
//         }else if($("#select-box")[0].value === "1"){
//             console.log("one");
//             populateDemolition();
//         }
//     });
// });

// Types.getTypes()
// .then(function(data){
//     typesArray = data;
//     console.log("typesArray", typesArray);
// });

// Products.getProducts()
// .then(function(data){
//     productsArray = data;
//     console.log("productsArray", productsArray);
// });



// let populateFireworks = function(){
//     var fireworksArray =[];
//     for (var i=0;i<typesArray.length;i++){
//         if(typesArray[i].category === 0){
//             fireworksArray.push({
//                 name : typesArray[i].name,
//                 description : typesArray[i].description
//             });
//         }
//     }

//     fireworksArray.forEach(function(item){
//         var tableInfo =
//         `<tr>
//             <td>${item.name}</td>
//             <td>${item.description}</td?
//         </tr>`;
//         console.log(fireworksArray);
//         $("#table").append(tableInfo);
//     });
// };

// let populateDemolition = function(){
//     var demolitionArray =[];
//     for (var i=0;i<typesArray.length;i++){
//         if(typesArray[i].category === 1){
//             demolitionArray.push({
//                 name : typesArray[i].name,
//                 description : typesArray[i].description
//             });
//         }
//     }

//     demolitionArray.forEach(function(item){
//         var tableInfo =
//         `<tr>
//             <td>${item.name}</td>
//             <td>${item.description}</td?
//         </tr>`;
//         console.log(demolitionArray);
//         $("#table").append(tableInfo);
//     });
// };
