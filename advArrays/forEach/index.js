//forEarch always returns undefined

// array.forEach(function(value, index, array){
//     //callback executed on every value in the array
// })

// var arr = [1,2,3];
// arr.forEach(function(value, index, array){
//     console.log(value + " " + index + " " + array);
// })

// function halfValues(arr){
//     var newArr = [];
//     arr.forEach(function(val){
//         newArr.push(val / 2);
//     })
//     console.log(newArr)
//     return newArr;
// };
// halfValues([2,4,6,8,10]);

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    var output = [];
    arr.forEach(element => {
        output.push(element * 2);
    });
    return output;
}
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    var output = [];
    arr.forEach(element => {
        if (element % 2 == 0){
            output.push(element);
        }
    });
    return output;
}
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
*/
function showFirstAndLast(arr){
    var output = [];
    arr.forEach(element => {
        output.push(element[0] + element[element.length-1])
    });
    return output
}
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    var output = arr;
    output.forEach(element => {
        element[key] = value;
    });
    return output;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   var ltrs = {a: 0, e: 0, i: 0, o: 0,u: 0}
   var charSplit = str.split('');
   charSplit.forEach(element => {
       switch(element){
        case 'a':
            ltrs.a += 1;
            break;
        case 'A':
            ltrs.a += 1;
            break;
        case 'e':
            ltrs.e += 1;
            break;
        case 'E':
            ltrs.e += 1;
            break;
        case 'i':
            ltrs.i += 1;
            break;
        case 'I':
            ltrs.i += 1;
            break;
        case 'o':
            ltrs.o += 1;
            break;
        case 'O':
            ltrs.o += 1;
            break;
        case 'u':
            ltrs.u += 1;
            break;
        case 'U':
            ltrs.u += 1;
            break;
       }
   });
return ltrs;
}
