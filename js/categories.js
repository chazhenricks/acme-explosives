"use strict";

let categoriesList = [];


let getCategories = function() {
    //loads JSON file.
    return new Promise((resolve, reject) => {

        var loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/categories.json");

        loader.addEventListener("load", function(){
            categoriesList = JSON.parse(this.responseText).categories;
            resolve();
        });
        loader.addEventListener("error", function(){
            console.log("An Error occured");
            reject();
        });

        loader.send();
    });
};

let showCategories = function() {
    return categoriesList;
};


module.exports = { getCategories, showCategories};
