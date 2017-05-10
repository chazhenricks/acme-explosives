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
