// iterates through Array
// runs a callback on each value in array
// if returns true on a single value, returns true

var arr = [1,2,3,4];
arr.some(function(value, index, array){
    return value > 3;
})

function some(array, callback){
    for(var i = 0; i < array.length; i++){
        if (callback(array[i], i, array)){
            return true
        }
    }
    return false;
}

function hasEvenNumber(arr){
    return arr.some(function(value){
        return value % 2 ===0;
    })
}

hasEvenNumber([1,2,3,4])
hasEvenNumber([1,3])