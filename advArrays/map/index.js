// map creates a new array
//iterates array called on
// runs callback for each
// returns new array of same length as old

var arr = [1,2,3];
arr.map(function(value, index, array){
    return value * 2;    
})

//map returns a new array, rather than editing an existing array

//map in a nutshell
function map (array, callback){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(callback(array[i], i, arr));
    }
    return newArr;
};
//map examples

function tripleValues(arr){
    return arr.map(function(value){
        return value * 3;
    });
}
function onlyFirstName(arr){
    return arr.map(function(val){
        return val.first;
    })
}
onlyFirstName([{first: 'Tim', last:'Garcia'}, {first:'Daniel', last:'Swanson'}])