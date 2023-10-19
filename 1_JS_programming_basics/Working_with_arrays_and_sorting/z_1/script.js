function analyzeArray(arr) {
    if (arr.length === 0) {
      return {
        sum: 0,
        average: 0,
        max: undefined,
        min: undefined,
      };
    }
  
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / arr.length;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
  
    return {
      sum,
      average,
      max,
      min,
    };
  }
  
  
  const numbers = prompt('введите числа');
  const analysis = analyzeArray(numbers);
  console.log(analysis); 
  