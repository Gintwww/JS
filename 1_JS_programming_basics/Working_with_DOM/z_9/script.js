const styleButton = document.getElementById('styleButton');

styleButton.addEventListener('click', function() {
    if (styleButton.classList.contains('style1')) {
        styleButton.classList.remove('style1');
        styleButton.classList.add('style2');
    } else {
        styleButton.classList.remove('style2');
        styleButton.classList.add('style1');
    }
});
