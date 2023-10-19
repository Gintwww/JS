const colorBlock = document.getElementById('colorBlock');

function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
}

function changeColor() {
    const red = getRandomColorValue();
    const green = getRandomColorValue();
    const blue = getRandomColorValue();

    const randomColor = `rgb(${red}, ${green}, ${blue}`;

    colorBlock.style.backgroundColor = randomColor;
}

document.addEventListener('keydown', changeColor);
