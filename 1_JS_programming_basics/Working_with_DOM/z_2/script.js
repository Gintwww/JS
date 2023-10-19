const colorChangeBlock = document.getElementById('colorChangeBlock');

colorChangeBlock.addEventListener('mouseenter', function() {
    colorChangeBlock.style.backgroundColor = 'lightcoral';
});

colorChangeBlock.addEventListener('mouseleave', function() {
    colorChangeBlock.style.backgroundColor = 'lightblue';
});
