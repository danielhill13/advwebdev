// iterates through Array
// runs a callback on each value in array
// if returns false on a single value, returns false

var arr = [1,2,3,4];
arr.every(function(value, index, array){
    return value > 3;
})

function every(array, callback){
    for(var i = 0; i < array.length; i++){
        if (!callback(array[i], i, array)){
            return false
        }
    }
    return true;
}
