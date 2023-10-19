function generatePassword(length, complexity) {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=<>?';
  
    let allowedCharacters = lowercaseLetters;
  
    if (complexity === 'medium' || complexity === 'high') {
      allowedCharacters += uppercaseLetters;
    }
  
    if (complexity === 'low' || complexity === 'medium' || complexity === 'high') {
      allowedCharacters += numbers;
    }
  
    if (complexity === 'high') {
      allowedCharacters += specialCharacters;
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      password += allowedCharacters.charAt(randomIndex);
    }
  
    return password;
  }
  
  const passwordLength = 12;
  const passwordComplexity = 'high';
  const generatedPassword = generatePassword(passwordLength, passwordComplexity);
  console.log(generatedPassword);
  