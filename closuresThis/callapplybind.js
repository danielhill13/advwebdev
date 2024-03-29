// CALL
var person = {
    firstName: "daniel",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName; // used to be 'Hello undefined
        },
        determineContext: function(){
            return this === person;
        }
    }
}
person.dog.sayHello() //"Hello undefined"
person.dog.sayHello.call(person);  //"Hello daniel"
person.dog.determineContext.call(person) //true
// Call in the wild
var colt = {
    firstName: "colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    }
}
var elie = {
    firstName: 'elie',
    sayHi: function(){
        return "Hi " + this.firstName;
    }
}
colt.sayHi(); // "Hi colt"
elie.sayHi(); // "Hi elie"

//REFACTOR
var colt = {
    firstName: "colt"
}
var elie = {
    firstName: 'elie'
}
function sayHi(){
    return "Hi " + this.firstName;
}
sayHi.call(elie)
sayHi.call(colt)
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// Select all divs on the page
var divs = document.getElementsByTagName('div');

//Returns all divs. But now to find all divs that have text 'Hello"
divs.filter // undefined
//divs is not an array, it's an array-like object, so filter wouldn't work
var divsArray = [].slice.call(divs);
// also could be Array.prototype.slice.call(divs);
// Do the same thing
divsArray.filter(function(val){
    return val.innerText === 'Hello';
});
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// APPLY
// Identical to call, until we add arguments
var colt = {
    firstName: "colt"
}
var elie = {
    firstName: 'elie'
}
function sayHi(){
    return "Hi " + this.firstName;
}
function addNumbers(a,b,c,d){
    return this.firstName + " just calculated " + (a+b+c+d);
}
addNumbers.apply(elie,[1,2,3,4]);
addNumbers.call(elie,1,2,3,4);

// So apply is to put in an array into functions that do not accept arrays, and it'll spread it out for us
// Example 1:
var nums = [1,2,3,4,5,6];
Math.max(nums); // NaN
Math.max.apply(this, nums); // 6
// Example 2:
function sumValues(a,b,c){
    return a+b+c;
};
var values = [4,2,1];
sumValues(values); // "4,2,1undefinedundefined"
sumValues.apply(this, values); // 7
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// BIND
// Works like call, but bind returns a function with the context of 'this' already bound
function addNumbers(a,b,c,d){
    return this.firstName + " just calculated " + (a+b+c+d);
};
var daniel = {
    firstName: 'daniel'
}

var danielCalc = addNumbers.bind(daniel,1,2,3,4); // function(){}
danielCalc() // daniel just calculated 10
var danielCalc = addNumbers.bind(daniel,1,2); // function(){}
danielCalc(3,4) // daniel just calculated 10


// set timeout - i start this and it'll print in 20 seconds
setTimeout(function(){
    console.log("Hello world")
}, 20000)
// now i can do other things in those 20 seconds before print
// 'hi' 'la la la'
// var fun = "yay";
// 1 + 1 // 2
// "Hello world"

///////////////////////////////////////////////////////////////
var daniel = {
    firstName: "Daniel",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName)
        }, 1000)
    }
}
daniel.sayHi() // Hi undefined
// this refers to global object
// since settimeout is called at later point in time, object attached to window
// settimeout accepts a callback, and every function get its own value of keyword this, even if its defined inside an object
// How do we solve this problem?
// call and apply invoke function right away (defeats purpose of settimeout). leaves us with bind
var daniel = {
    firstName: "Daniel",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }.bind(this), 1000)
    }
}
daniel.sayHi() // Hi Daniel


