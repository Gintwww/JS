const checkButton = document.getElementById("rezultButton");

checkButton.addEventListener("click", function()
{
  const inputString = document.getElementById("inputString").value;
  const result = Change_to_zero(inputString);

  document.getElementById("output").textContent = result;
  

}
)

function Change_to_zero(initial_line)
{
  try
  {
    const sort_array = [];
    const number_array = [];
    const array = initial_line.split(' ');

    if (array === '')
    {
      return 'Вы ввели пустую строчку!';
    }

    for (num of array)
    {
      if (!isNaN(num) && num != '')
      {
        sort_array.push(parseInt(num));
      }
    }

    
    for (num of sort_array)
    {
      if (num === '-1')
      {
        number_array.push(0);
      }
    }


    return sort_array;

    // const number_array = parseInt(array); 

    if (isNaN(number_array))
    {
      throw new Error('Вы ввели не число!');
    }

    return array;



  }
  catch
  {
    return 'Ошибка' + error.message;
  }








}













