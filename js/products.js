
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
