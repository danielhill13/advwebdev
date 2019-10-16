
// Reduce accepts a callback and an optional second parameter
// Iterates through array and callback on each value
// First parameter to the callback is either teh first value in  the array or the optional second parameter
//First oarameter to the callback is often called the accumulator
//Returned value for callback becomes the new value of accumulator
//whatever is returned from the callback function becomes the new value of the accumulator

var arr = [1,2,3,4,5];

arr.reduce(function(accumulator, nextValue, index, array){
    return accumulator + nextValue;
},10);

//25
//without 10 2nd parameter, itd be 15

var names = ['Tim', 'Matt', 'Colt', 'Elie'];
names.reduce(function(accumulator, nextValue){
    return accumulator += ' ' + nextValue;
},'The instructors are ');

var arr1 = [5,4,1,4,5];

//building a counter of each array item in object
arr1.reduce(function(accumulator, nextValue){
    if(nextValue in accumulator){
        accumulator[nextValue]++;
    } else {
        accumulator[nextValue] = 1;
    }
    return accumulator;
},{});


function sumOddNumbers(arr){
    return arr.reduce(function(accumulator, nextValue){
        if(nextValue % 2 !== 0){
            accumulator += nextValue;
        }
        return accumulator;
    },0);
}


function createFullName(arr){
    return arr.reduce(function(accumulator, nextValue){
        accumulator.push(nextValue.first + " " + nextValue.last);
        return accumulator;
    }, []);
}

createFullName([{first:'Daniel', last:'Hill'}, {first:"Paula", last:"Pando"}])
