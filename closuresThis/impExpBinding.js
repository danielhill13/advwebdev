//////////////////////////////////////////////////
// IMPLICIT BINDING - value will be the closest parent object

"use strict"

var person = {
    firstName: "Daniel",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    }
}
/////////////////////////////////////////////////
/////////////////////////////////////////////////
var person = {
    firstName: "daniel",
    determineContext: this
}
person.determineContext // window // because this is defined whe na function is run. No function was run so value of this is still the window

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
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }
    }
}
// person.determineContext() === true
// person.dog.sayHello call returns undefined because there is no firstName of dog
// person.dog.determinecontext returns false because this === dog there

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//EXPLICIT BINDING
// call apply bind methods set context of what 'this' will be 
// only invoked on / used by functions
// CALL - first arg is what i want value of 'this' to be (thisArg)
    // arguments after thisArg are params i want to pass to function that i'm changing value of 'this' in
    // immediately invoked
// APPLY - thisArg is value of  what we want 'this' to be.
    // 2nd paramenter is array of arguments to pass to function
    // immediately invoked
// BIND - almost identical to Call
    // does not invoke immediately
    // returns function definition with value of keyword this set to what I pass as first parameter (thisArg) to Bind








