const incrementButton = document.getElementById('incrementButton');
const counterElement = document.getElementById('counter');

let counter = 0;

incrementButton.addEventListener('click', function() {
    counter++;

    counterElement.textContent = `Счетчик: ${counter}`;
});
