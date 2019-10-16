// Private variables can only be accessed in certain scope, not modified externally

function counter(){
    var count = 0;
    return function inner(){
        count++;
        return count;
    }
}

var counter1 = counter();
counter1(); // creates private count variable and increments

var counter2 = counter();

counter2() // creates another count variable and increments, separatefrom counter1's private var

function classRoom(){
    var instructors = ["Elie", "Colt"];
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

var first = classRoom();

first.getInstructors();  // ["Elie", "Colt"]
first.addInstructor('Matt'); // ["Elie", "Colt", "Matt"]
first.addInstructor('Tim'); // ["Elie", "Colt", "Matt","Tim"]

var course2 = classRoom();
first.getInstructors().pop() // Removes item from array. How do we avoid? Use slice to return a copy of array, to avoid overwriting original array

