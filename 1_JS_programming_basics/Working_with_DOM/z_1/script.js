const button = document.getElementById('changeTextButton');

function changeButtonText() {
    button.innerText = 'Текст изменен';
}

button.addEventListener('click', changeButtonText);
