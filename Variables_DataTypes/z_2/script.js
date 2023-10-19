function reverseWords(str) {
  const words = str.split(' ');
  const reversedWords = words.map(word => word.split('').reverse().join(''));
  return reversedWords.join(' ');
}

document.getElementById("reverseButton").addEventListener("click", function () {
  const inputString = document.getElementById("inputString").value;
  const reversedString = reverseWords(inputString);
  document.getElementById("output").textContent = reversedString;
});
