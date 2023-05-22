const removeFromArray = function(numbers) {
    const index = numbers.indexOf(3);//the index number of a string to be removed
    if (index > -1) {
      numbers.splice(index, 1);
    }
    return numbers; // Return the modified array instead of logging it
  };
  
  const numbers = [1, 2, 3, 4];
  console.log(removeFromArray(numbers));
  

// Do not edit below this line
module.exports = removeFromArray;
