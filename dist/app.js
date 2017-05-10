(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let categoriesList = [];
let category1 = "";
let category2 = "";

let getCategories = function() {

    return new Promise((resolve, reject) => {

        var loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/categories.json");

        loader.addEventListener("load", function(){
            categoriesList = JSON.parse(this.responseText).categories;
            resolve(categoriesList);
        });
        loader.addEventListener("error", function(){
            reject();
        });

        loader.send();
    });
};

let showCategories = function() {
    return categoriesList;
};

let showCat1 = function() {
    return category1;
};

let showCat2 = function() {
    return category2;
};

module.exports = { getCategories, showCategories, showCat1, showCat2 };

},{}],2:[function(require,module,exports){
"use strict";




},{}],3:[function(require,module,exports){
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



























},{"./categories.js":1,"./dom.js":2,"./products.js":4,"./types.js":5}],4:[function(require,module,exports){

"use strict";

let productsList = [];

let getProducts = function() {

    return new Promise((resolve, reject) => {

        var loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/products.json");

        loader.addEventListener("load", function(){
            productsList = JSON.parse(this.responseText).products;
            resolve(productsList);
        });
        loader.addEventListener("error", function(){
            reject();
        });

        loader.send();
    });
};

module.exports = {getProducts};

},{}],5:[function(require,module,exports){
"use strict";

let typesList = [];

let getTypes = function() {

    return new Promise((resolve, reject) => {

        var loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/types.json");

        loader.addEventListener("load", function(){
            typesList = JSON.parse(this.responseText).types;
            resolve(typesList);
        });
        loader.addEventListener("error", function(){
            reject();
        });

        loader.send();
    });
};

module.exports = {getTypes};

},{}]},{},[3]);
