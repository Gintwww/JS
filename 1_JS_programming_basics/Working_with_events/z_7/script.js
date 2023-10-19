const confirmButton = document.getElementById('confirmButton');
const modal = document.getElementById('modal');
const confirmOk = document.getElementById('confirmOk');
const confirmCancel = document.getElementById('confirmCancel');

confirmButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

confirmOk.addEventListener('click', function() {
    alert('Действие подтверждено');
    modal.style.display = 'none';
});

confirmCancel.addEventListener('click', function() {
    alert('Действие отменено');
    modal.style.display = 'none';
});
