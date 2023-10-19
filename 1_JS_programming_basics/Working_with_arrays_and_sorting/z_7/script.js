function sortStringDescending(inputString) {
    const charArray = inputString.split('');
  
    charArray.sort((a, b) => b.localeCompare(a));

    const sortedString = charArray.join('');
  
    return sortedString;
  }
  
  const inputStr = prompt('Введите что-нибудь уже');
  const sortedStr = sortStringDescending(inputStr);
  console.log(sortedStr);
  