function countTotalCharacters(strings) {
    let totalCharacters = 0;
  
    for (let i = 0; i < strings.length; i++) {
      totalCharacters += strings[i].length;
    }
  
    return totalCharacters;
  }
  
  const stringArray = ["Это строка 1", "Это строка 2", "Еще одна строка"];
  const totalChars = countTotalCharacters(stringArray);
  console.log(`Общее количество символов: ${totalChars}`);
  