

//describe - let me desscribe ____ to you
    //it - let me tell you about _____
        //expect - here's what i expect

        //Pseudo
// describe("Earth")
//     it("is round")
//         expect(eart.isRound.toBe(true))
//     it("is the third planet from the sun")
//         expect(earth.numberFromSun).toBe(3)

        //Actual
// var earth = {
//     isRound : true,
//     numberFromSun: 3
// }

// describe("Earth", function(){
//     it("is round", function(){
//       expect(earth.isRound).toBe(true)  
//     });
//     it("is the third planet from the sun", function(){
//         expect(earth.numberFromSun).toBe(3)
//     });
// });

//Matchers
//toBe / not.toBe - triple equals
//toBeCloseTo (takes closeness params)
//toBeDefined - test undefined
//toBeFalsey/Truthy
//toBeGreaterThan/LessThan
//toContain
//toEqual - checks values, not memory reference
//jasmine.any()



