//what is closure
//use closure to emulate private variables
//real world use cases

//DEFINTION
//An (inner) function that makes use of variables defined in outer functions that have previously returned

// function outer(){
//     var start = "Closures are" 
//     return function inner(){
//         return start + " " + "awesome";
//     }
// }

function outer1(a){
    return function inner(b){
        //inner function makes use of variable a
        //a was defined in an outer function called outer
        //by the time inner was called, outer function has returned
        //this function called "inner" is a closure!
    }
}
outer1(5)(5); // 10

var storeOuter = outer1(5);
storeOuter(10); // 15

function outerFn(){
    var data = " somethjing from outer";
    var fact = "Remember me";
    return function innerFn(){
        debugger
        return fact;
    }
}