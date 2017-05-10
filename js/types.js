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
