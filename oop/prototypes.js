// what is the prototype object?
// What is the relationship between __proto__, prototype, and constructor?
// adding methods and properties on the prototype obejct to write more efficient code
// explain differences between adding methods and properties to prototype vs constructor
// implement inheritanbce in JS through the prototype object

// new creates an object, sets value of this to that object, adds return this to end of function, creates link between object adn prototype property of the constructor function

// Person.prototype (object with property named constructor, which points to the constructor function).
// When a new object is created with 'new', a property called __proto__ gets created, linking the object and the prototype property of the constructor function

function Person(name){
    this.name = name;
}
var daniel = new Person('Daniel');
daniel.__proto__ === Person.prototype // true!!!!!!!!!
Person.prototype.constructor === Person // true!!!!!

////////////////////////////////////////
////////////////////////////////////////
// 
Person.prototype.isInstructor = true;
// __proto__ enables all objects created with 'new Person' have access to the new prototype method
var arr = [];
arr.hasOwnProperty('length') // true
// PROTOTYPE CHAIN - Javascript looks for methods and properties the item, then goes to .__proto__ up the chain (arr --> Array --> object --> null) to find the methods/properties
////////////////////////////////////////
////////////////////////////////////////

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHi = function(){
        return 'Hi ' + this.firstName;
    }
    }
// Code works, but is inefficient
// Refactor as below to be more efficient
function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person. prototype.sayHi = function(){
    return 'Hi ' + this.firstName;
}

// Create constructor function for a Vehicle, each object created should have a make, model and year. Also a property called isRunning, which is set to false

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}
Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}
Vehicle.prototype.beep = function(){
    if (this.isRunning === true){
        return 'beep';
    }
}