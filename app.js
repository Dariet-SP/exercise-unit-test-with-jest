// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollartoYen = function(valueInDollar) {
    // Convert the given valueInDollar to Euro
    let valueInYen = valueInDollar * 149.4 ;
    // return the yen value
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to pound
    let valueInPound = valueInYen * 0.0053 ;
    // return the pound value
    return valueInPound;
}
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollartoYen }
