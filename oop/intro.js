function House(bedrooms, bathrooms, numSqFt){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqFt = numSqFt;
}
var FirstHouse = House(2,3,1000);
FirstHouse.bedrooms //undefined

var FirstHouse = new House(2,3,1000);
FirstHouse.bedrooms // 2

// NEW
// creates an empty object
// sets keyword this  to be that empty object
// adds line 'return this' to the end of the function, which follows it around
// adds property on the empty object called __proto__ which links prototype property on the constructor function to the empty object

function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " just barked!")
    }
}

var Bowser = new Dog('Bowser', 3)
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Refactor multiple constructors
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}
function Motorcycle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}
// Refactor the stuff above
function Motorcycle(make, model, year){
    //calling Car using this below means the object from the Motorcycle function is in play rather than from Car
    Car.call(this, make, model, year);
    this.numWheels = 2;
}
// ORRRRRRRR use apply
function Motorcycle(make, model, year){
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}