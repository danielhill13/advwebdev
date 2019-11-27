replace function with =>

var add = function (a, b){
    return a+b;
}
var add = (a,b) => {
    return a+b;
}
var add = (a,b) => a+b;

////////////////////////////////////
////////////////////////////////////
[1,2,3].map(function(value){
    return value * 2;
})
[1,2,3].map (value => value*2);

////////////////////////////////////
////////////////////////////////////
function doubleAndFilter(arr){
    return arr.map(function(value){
        return value * 2;
    }).filter(function(value){
        return value % 3 ===0;
    })
}
var doubleAndFilter = arr => arr.map(val => val * 2).filter(num => num % 3 === 0);

// arrow functions don't get their own keyword this or arguments keyword
// 
// 


