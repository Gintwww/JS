const textContainer = document.getElementById('textContainer');
const text = document.getElementById('text');
const textSizeSlider = document.getElementById('textSizeSlider');

textSizeSlider.addEventListener('input', function() {
    const textSize = textSizeSlider.value + 'px';
    text.style.fontSize = textSize;
});
