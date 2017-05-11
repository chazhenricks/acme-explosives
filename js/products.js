"use strict";

console.log("Products");

let productsList = [];

let getProducts = function() {
    //loads JSON file.
    return new Promise((resolve, reject) => {

        var loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/products.json");

        loader.addEventListener("load", function(){
            productsList = JSON.parse(this.responseText).products;
            console.log("productsList", productsList);
            resolve(productsList);
        });
        loader.addEventListener("error", function(){
            console.log("An Error occured");
            reject();
        });

        loader.send();
    });
};

let showProducts = function(){
    return productsList;
};


