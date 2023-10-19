function capitalizeWords(inputString) {
    const words = inputString.split(' ');
    const capitalizedWords = [];
  
    for (let word of words) {
      
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      capitalizedWords.push(capitalizedWord);
    }
  
    return capitalizedWords.join(' '); 
  }
  
  
  const inputString = prompt('Введите строку');
  const resultString = capitalizeWords(inputString);
  console.log(resultString);  
  