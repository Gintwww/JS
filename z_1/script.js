const checkButton = document.getElementById("checkButton");

checkButton.addEventListener("click", function()
{

    const numberInput = document.getElementById("numberInput").value;
    const number = parseInt(numberInput);
    
    if (!isNaN(number))
    {
        const resultElement = document.getElementById("result");

        if (isPrime(number))
        {
            resultElement.textContent = `${number} - простое число.`;
        }
        else
        {
            resultElement.textContent = `${number} - составное число`;
        }
    }
    else
    {
        alert("Введите корректное число");
    }
}
)

function isPrime(x) {
    if (x <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.floor(x / 2); i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }

  if (isPrime(number)) {
    resultElement.textContent = `${number} - простое число.`;
    console.log(`${resultElement} - простое число.`);
  } else {
    resultElement.textContent = `${number} - простое число1113.`;
    console.log(`${resultElement} - составное число.`);
  }







