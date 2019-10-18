// this
// reserved keyword
// determined by how a function is called (execution context)
// determined using 4 rules - global, object/implicit, explicit, new

// When 'this' is not inside of a declared object
console.log(this);  // window
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// this inside a function

function whatIsThis(){
    return this;
}
whatIsThis(); // window

function variablesInThis(){
    this.person = "daniel";
}

variablesInThis() // sets window.person to "daniel"

console.log(person); // daniel
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Bad idea to assign variables in global object from inside functions?
// "use strict" introduced to help write better JS

"use strict"

function variablesInThis(){
    this.person = "daniel";
}

variablesInThis() // TypeError - can't set person of undefined

