const checkButton = document.getElementById("rezultButton");

checkButton.addEventListener("click", function()
{
  const number = document.getElementById("inputString").value;

  const result = FizzBuzz(number);

  document.getElementById("output").textContent = result;
}
)

function FizzBuzz(number)
{
  try 
  {
    const inputString = number;

    if (inputString === '')
    {
      throw new Error('Вы ввели пустую строку!');
    }

    const num = parseInt(number);

    if (isNaN(number))
    {
      throw new Error('Вы ввели не число!');
    }

    if (num % 3 === 0 && num % 5 === 0)
      {
        return 'FizzBuzz'
      }
    else if (num % 3 === 0)
      {
        return 'Fizz'
      }
    else if (num % 5 === 0)
      {
        return 'Buzz'
      }
    else
      {
        return num;
      }
  }

  catch (error)
  {
    return 'ОШИБКАААА' + error.message;
  }
}













