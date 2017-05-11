"use strict";

console.log("Types");

let typesList = [];

let getTypes = function() {
    //loads JSON file.
    return new Promise((resolve, reject) => {

        var loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/types.json");

        loader.addEventListener("load", function(){
            typesList = JSON.parse(this.responseText).types;
            resolve(typesList);
        });
        loader.addEventListener("error", function(){
            console.log("An Error occured");
            reject();
        });

        loader.send();
    });
};

let showTypes = function (){
    return typesList;
};


