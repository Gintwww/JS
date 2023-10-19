const checkButton = document.getElementById("rezultButton");

checkButton.addEventListener("click", function()
{
  const expression = document.getElementById("inputString").value;
  const result = calculate(expression);

  document.getElementById("output").textContent = result;



}
)
//Обрабочик ошибки
function calculate(expression)
{
  try 
  {
      const result = eval(expression);
      if (isFinite(result))
      {
        return result;
      }
      else
      {
        throw new Error(' неверное выражение');
      }
  }

  catch (error) 
  {
    return 'Ошибка вы дебик ';
  }
}
















