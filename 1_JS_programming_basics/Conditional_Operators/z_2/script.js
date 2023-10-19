const checkButton = document.getElementById("rezultButton");

checkButton.addEventListener("click", function()
{
  const stringInput = document.getElementById("inputString").value;
  
  const result = Mirror_word(stringInput);
  
  document.getElementById("output").textContent = result;
}
)


function Mirror_word(string)
{
  const words = string.split(' ');

  const reversed_words = words.reverse().join(' ');

  return reversed_words;
}








