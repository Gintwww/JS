const toggleButton = document.getElementById('toggleButton');
const textBlock = document.getElementById('textBlock');

let isTextHidden = false;

toggleButton.addEventListener('click', function() {
    if (isTextHidden) {
        textBlock.style.display = 'block';
        toggleButton.textContent = 'Скрыть текст';
    } else {
        textBlock.style.display = 'none';
        toggleButton.textContent = 'Показать текст';
    }

    isTextHidden = !isTextHidden;
});
