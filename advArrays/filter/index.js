//Create new array
// Iterate through an Array
// run callback on each value
// If callback returns true, add that value to array
// if false, value is ignored from new array

//Result will ALWAYS be a boolean

var arr = [1,2,3,4];
arr.filter(function(value, index, array){
    return value > 2;
})

var people = [  {name: "Daniel"},
                {name: "Stevenson"},
                {name: "Happy Go Lucky"}
            ];
people.filter(function(value, index, array){
    return value.name.length > 6;
})


function filter (array, callback){
    var newArr = [];
    for (var i = 0; i < array.length; i++){
        if (callback(array[i], i, array)){
            newArr.push(array[i]);
        }
    }
    return newArr;
};


