function replaceNegativeNumbersWithZero(arr) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        result.push(0);
      } else {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  const numbers = prompt('введите числа');
  const modifiedNumbers = replaceNegativeNumbersWithZero(numbers);
  console.log(modifiedNumbers); 
  