// Keyword this is a reserved word in Javascript and no variable can be named this.

// thiswhen used will allow you to reuse code and keep your code DRY - Don't Repeat Yourself. We can borrow functions from other functions using keyword this.

// The value of keyword this is usually determined using 4 rules (global, object/implicit, explicit, new) and by how a function is called. i.e. "execution context. Understanding these 4 rules is fundamental in understanding the usage of keyword this.

// In Javascript, every time a function is a run, two special keywords are given to that function. The arguments keyword and keyword this defined for that function.

// 1- The Global Context

// The global rule applies when you see keyword this outside of a declared object (i.e. Keyword this is in the wild).

// Declared Object means there has not been an object literal defined, which contains a function which uses the keyword this.

// When we see the keyword this in global context, its value refers to the global object which in a browser is the window object. So, console.log(this) // window

// Every variable you define in the global scope is attached to the global object which is the window object in a browser. So, you can use window.myVar to call the variable.

// When the keyword this is outside of an object and you don't see call, apply or bind or the new keyword, its value is the global object.

// We can get around the problem of not being able to access variables defined in a function by omitting the VAR when declaring new variables inside of a function. However, this is bad practice as generally best practice is to declare all of our variables at the top of our code even if they do not have a value and then assign those values at a later time.

// Unfortunately since the keyword this is the global object it's quite easy to accidentally declare global variables inside of a function.

// Considering functions are objects in Javascript, then placing thisinside the function won't refer to the function object. The keyword this works a little bit differently. Since the value of the keyword this is determined when a function is invoked (we call that the execution context), we don't know for sure what it's value will be. However, when the keyword this is inside of a function - and it is not inside of a newly declared object - the keyword this will refer to the global object. Say we have the following code: function sayHi(){ return this}. Our function can be invoked using sayHi() or using window.sayHi() - so the object which sayHi is defined on is actually the window or global object(which is what the keyword this refers to).

// Using strict mode will result in the keyword this inside of the function to be undefined. This means if we try to attach properties onto the keyword this when in strict mode we get a type error. This is because strict mode is used to stop functions from creating global variables as doing that is bad coding practice. To enable strict mode you need to use "use strict" at top of your code (JS version ES5 or later).



// KEYWORD THIS: The IMPLICIT CONTEXT

// 2- Implicit/Object

// When keyword this is found inside a declared object, the value of the keyword this will always be the closest parent object.

// Using strict mode does not have any effect on the keyword thishere because the scope of keyword this is already bound to the parent object.

// However, a keyword this is defined when a function is run! If there is not a function being run in an object to create a new value of the keyword this, the value of this is still the window.

// Nested Objects: The value of keyword this in the nested object will always be the closest parent object. So always the inner parent object not the outer. If the inner object doesn't have keys the outer has, referring to the outer parent keys from the inner object will always return undefined.



// KEYWORD THIS: EXPLICIT CONTEXT

// 3- Explicit Context

// When you put keyword this inside nested declared objects, you won't be able to make it refer to the outer parent object without explicitly setting it to the outer parent object.

// When you see .call(), .apply(), or .bind() methods, you can easily determine what the value of the keyword this has been set explicitly to be. Because, you get to fully control and set the value of keyword this to what you want.

// Explicit Rule has precedence over the previous 2 rules related to keyword this.

// .call(), .apply(), or .bind() methods can only be invoked on functions. These methods can only be used by functions not by other data types like strings, Booleans or objects.

// call() and bind() will take infinite number of parameterswhile apply() will only take two parameters.

// .call(thisArg) Method: The first argument to the call()method is the value you want the keyword this to be. This is commonly called the thisArg can be set to whatever you want. The arguments after the thisArg are the parameters you want to pass to the function that you are changing the value of the keyword thisin.

// A function can have unlimited number of arguments and we can separate them using , when passing them to .call().

// When a .call() method is used on a function, that function is immediately invoked.

// .apply() Method: is almost identical to .call(). Except, apply() will only accept two parameters passed in at most. thisArg which sets the value of this and an array of arguments [a, b, c, d, ...] which are passed to the function in which we are changing the value of keyword this.

// When a .apply() method is used on a function, that function is immediately invoked.

// `.bind() Method: is almost identical to .call() again. Except, instead of invoking the function which it is called on immediately, .bind() returns a function definition with the value of the keyword this set to the first parameter passed to the bind()method. i.e. thisArg.

// bind() is an extremely powerful method as we can save functions with a different value of the keyword this and call them at a later point in time. This is quite valuable when working with asynchronous code like setTimeout() and is the building block for more advanced functional programming techniques like curry.

// Currying: is when we call a function with fewer arguments than it expects. In turn, the invoked function returns a function that takes the remaining arguments. Hackernoon Article Javascript and Functional Programming: Currying



// KEYWORD THIS: CALL

// .call() is commonly used to avoid code duplication.

// With .call() the method of the nested object will be automatically invoked as you attach the value of this to the outer parent object.

// With .call() you can write a function then attach it to an object. Then keyword this will refer to that object. In this case you can write your function once and use for many different usecases.

// Array-like object means that the object has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach and map.

// When selecting elements from a web page, they are gathered in an HTML collection array like object. slice method can be called to convert Array-like objects / collections to a new Array and you can use call method to direct this inside slice towards the new divs array. array-like-objects are technically still objects. Once we convert the array-like-object into an array using [].slice.call(thisArg)

// We can use array methods on that new variable, but we don't overwrite the array-like-object. So, we still will not be able to use things like filter on the original array-like-object.

// We're simply borrowing the slice function from an empty array and setting the target of what will be sliced to be the array-like-object called divs.

// The this is actually the empty array [] - we follow the implicit rule for this one so we go to the left of the dot.

// We are basically making a shallow copy of an empty array and then pointing its this towards the object divs.

// We do not need to define [] like a normal variable.

// You just bind the method to the object. The arguments inside a function is an example of an 'array-like object'. MDN Array Like Objects



// KEYWORD THIS: APPLY

// We use .apply() method when the function we're calling it on does not accept an array as an input. Using .apply() will spread out the values of the array for us! [1,2,3] to 1, 2, 3.

// In the example here this just refers to the global object, we're not using apply to change the value of the keyword this, we're using apply to spread out values.

// .call() can be used to convert an array-like-object (i.e. {0: "a", 1: "b"...} to an array ["a", "b", ...]. A common usage include the DOM elements array-like-object selected or arguments array-like-object that gets passed into a function. Simply use [].slice.call(arguments)

// You can also use .apply() in a closure to return a bounded function with any number of arguments passed in (Useful when you don't know how many arguments will be passed in). Simply use fn.apply(thisArg, arguments) in the returned closure function. Any new function invoking the returned closure with a set of arguments can bound it to an object passed in as a parameter.



// Notes on Exercises:

// Inside of the inner function, we get our own value for the keyword this. If we wanted to invoke the original function, with a specific value of the keyword this - we have to explicitly set it using apply . The reason why we're using apply is so that we can pass an array of arguments as a second parameter instead of comma separated values with call . What's also nice about apply is that since it accepts an array as it's second parameter - we can pass the arguments array-like-object to the function. This means that we don't need to know all the parameters that will be passed to the function, we're just going to invoke it using the arguments that are passed to it.

// In [].slice.call(arguments, 2) the 2 is the second parameter of call, which is whatever arguments you want to pass to the function which you are changing the keyword this on (in our case, that is the slice function). This is not shorthand, what we're doing is passing in a second argument to call, which will be the 1st argument to the function which we are modifying (slice).

// Every time a function is created using the function keyword, a new arguments keyword is assigned to that function. So whenever you use arguments inside of a function, the arguments keyword will refer to the specific values passed to that function

// RESOURCES

// What is the Execution Context & Stack in JavaScript?
// Identifier Resolution and Closures in the JavaScript Scope Chain
// Understanding Scope and Context in JavaScript



// KEYWORD THIS: BIND

// .bind() returns a functions with the context of this already bound to the parameter passed in to it. The parameters in .bind() works like .call();

// Common usecase for .bind(): When we do not know all the arguments that are to be passed to the function which means we do not want to invoke the function right away. We just want to return a new function with sum of the parameters passed in. We call this Partial Application.

// Another very common use case of .bind()is to set the context of the keyword this for the function that will be called at a later point in time. Very commonly this happens when dealing with asynchronous code or code that does not run line by line.

// .setTimeout() is a method on the window object that is used to execute a function at once after a specified amount of time. We can write and run mode code as the application waits for the setTimeout counter to finish before executing its callback function.

// Adding undefined to a number will result in a NaN output. For example, if a function accepts 4 parameters and you pass in 3, the 4th will have a value set to undefined. When you add undefined to the result, you will get NaN.

// If you have method in an object and in that method are using setTimeout() with the keyword this, by the application runs the callback in setTimeout, your keyword this is no longer referring to the parent object but rather the global object because the complier has now moved on from inside the object.