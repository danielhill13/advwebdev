//forEarch always returns undefined

// array.forEach(function(value, index, array){
//     //callback executed on every value in the array
// })

// var arr = [1,2,3];
// arr.forEach(function(value, index, array){
//     console.log(value + " " + index + " " + array);
// })

function halfValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val / 2);
    })
    console.log(newArr)
    return newArr;
};
halfValues([2,4,6,8,10]);