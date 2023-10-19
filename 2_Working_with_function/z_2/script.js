function isSubstring(mainString, subString) {
    return mainString.indexOf(subString) !== -1;
  }
  
  const mainStr = prompt('введите строку');
  const subStr1 = "строки";
  const subStr2 = "пароля";
  console.log(isSubstring(mainStr, subStr1));
  console.log(isSubstring(mainStr, subStr2));
  