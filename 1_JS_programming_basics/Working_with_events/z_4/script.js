const keyDisplay = document.getElementById('keyDisplay');

document.addEventListener('keydown', function(event) {
    const pressedKey = event.key;
    
    keyDisplay.textContent = `Нажата клавиша: ${pressedKey}`;
});
