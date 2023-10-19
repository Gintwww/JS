const checkButton = document.getElementById("rezultButton");

checkButton.addEventListener("click", function()
{
  const userInput = document.getElementById("inputString").value;

  const arrayInput = userInput.split(' ');
  const numberArray = [];

  for (let number of arrayInput)
  {
    numberArray.push(number);
  }

  const rezult = Multiplication_Numbers(numberArray);

  document.getElementById("output").textContent = rezult;
}
)

function Multiplication_Numbers(array)
{
  try
  {
    if (array.length > 2)
    {
      const sorted_array = array.slice().sort((a,b) => a - b);
      const length_arr = sorted_array.length;

      max_1 = sorted_array[length_arr - 1]
      max_2 = sorted_array[length_arr - 2]

      return max_1 * max_2;
    }
    else
    {
      return "Массив должен содержать как минимум 2 элемента";
    }
  }
  catch
  {
    return 'ОШИБКА!!!' + error.message;
  }

}









