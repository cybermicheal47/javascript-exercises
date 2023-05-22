const sumAll = function() {
    let arr = [1, 4]; // Define the range from 1 to 4
    let fullArr = [];
    let sum = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    arr.sort(function(a, b) {
        return a - b;
    });
    
    for (let i = arr[0]; i <= arr[1]; i++) {
        fullArr.push(i);
    }
    
    sum = fullArr.reduce(reducer);
    
    console.log(sum); // Output: 10 (1 + 2 + 3 + 4)
};

sumAll(); // Call the function to calculate and display the sum


// Do not edit below this line
module.exports = sumAll;
