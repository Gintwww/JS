const textBlock = document.getElementById('textBlock');

textBlock.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        textBlock.style.fontSize = parseInt(getComputedStyle(textBlock).fontSize) - 2 + 'px';
    } else {
        textBlock.style.fontSize = parseInt(getComputedStyle(textBlock).fontSize) + 2 + 'px';
    }
    event.preventDefault(); 
});
