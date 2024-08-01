// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745);
})
test("One dollar should be 149.4 Yen dollars", function() {
    // Import the function from app.js
    const { fromDollartoYen } = require('./app.js');
    // This is the comparison for the unit test
     expect(fromDollartoYen(4)).toBe(597.6); 
})
test("One yen should be 0.0053 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
    // This is the comparison for the unit test
     expect(fromYenToPound(2)).toBe(0.0106); 
})