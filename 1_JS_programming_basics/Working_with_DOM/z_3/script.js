const itemList = document.getElementById('itemList');
const addItemButton = document.getElementById('addItemButton');

addItemButton.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый пункт';

    
    itemList.appendChild(newItem);
});
