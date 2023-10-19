const mouseBlock = document.getElementById('mouseBlock');

function updateCoordinates(event) {
    const x = event.clientX - mouseBlock.offsetLeft;
    const y = event.clientY - mouseBlock.offsetTop;
    
    mouseBlock.textContent = `Координаты: X = ${x}, Y = ${y}`;
}

mouseBlock.addEventListener('mousemove', updateCoordinates);
