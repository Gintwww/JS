function findLargestDifference(numbers) {
    if (numbers.length < 2) {
      console.log("Массив должен содержать как минимум два элемента.");
      return;
    }
  
    let min = numbers[0];
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      } else if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    const largestDifference = max - min;
  
    console.log(`Наибольшая разница между элементами массива: ${largestDifference}`);
  }
  

  const numberArray = prompt('Введите числа');
  findLargestDifference(numberArray);
  