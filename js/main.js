"use strict";

console.log("MAIN.JS");

let Categories = require("./categories.js");
let Types = require("./types.js");
let Products = require("./products.js");
let DomStuff = require("./dom.js");

let categoryArray = [];
let typesArray = [];
let productsArray = [];


Categories.getCategories()
.then(function(data){
    categoryArray = data;

    for (var i=0;i<categoryArray.length;i++){
        var optionsInfo =`<option id="opt-${i}" value="${categoryArray[i].id}">${data[i].name}</option>`;
        $("#select-box").append(optionsInfo);
    }

})
.then(function(){
    $("#select-btn").click(function(){
        if($("#select-box")[0].value === "0"){
            console.log("zero");
            populateFireworks();
        }else if($("#select-box")[0].value === "1"){
            console.log("one");
        }
    });
});

Types.getTypes()
.then(function(data){
    typesArray = data;
    console.log("typesArray", typesArray);
});

Products.getProducts()
.then(function(data){
    productsArray = data;
    console.log("productsArray", productsArray);
});



let populateFireworks = function(){
    var fireworksArray =[];
    for (var i=0;i<typesArray.length;i++){
        if(typesArray[i].category === 0){
            fireworksArray.push({
                name : typesArray[i].name,
                description : typesArray[i].description
            });
        }
    }

    fireworksArray.forEach(function(item){
        var tableInfo =
        `<tr>
            <td>${item.name}</td>
            <td>${item.description}</td?
        </tr>`;
        console.log(fireworksArray);
        $("#table").append(tableInfo);
    });
};


























