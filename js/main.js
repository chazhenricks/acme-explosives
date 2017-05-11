"use strict";

console.log("MAIN.JS");



let categoryArray = [];
let productsArray = [];
let typesArray = [];


getCategories().then(
    function(data){
    categoryArray = data;
    console.log(categoryArray);
    },
    console.error()
);

getProducts().then(
    function(data){
    productsArray = data;
    console.log(productsArray);
    },
    console.error()
);
getTypes().then(
    function(data){
    typesArray = data;
    console.log(typesArray);
    },
    console.error()
);


































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
