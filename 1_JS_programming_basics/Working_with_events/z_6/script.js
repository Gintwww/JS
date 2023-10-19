const changeBackgroundButton = document.getElementById('changeBackgroundButton');
const backgroundArea = document.getElementById('backgroundArea');

changeBackgroundButton.addEventListener('click', function() {
    const randomColor = getRandomColor();
    backgroundArea.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
