const image = document.getElementById('image');
let isImage1 = true;

image.addEventListener('click', function() {
    if (isImage1) {
        image.src = 'second_image.jpg';
        image.alt = 'Изображение 2';
    } else {
        image.src = 'first_image.jpg';
        image.alt = 'Изображение 1';
    }

    isImage1 = !isImage1;
});
