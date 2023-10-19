const itemList = document.getElementById('itemList');
const removeLastItemButton = document.getElementById('removeLastItemButton');

removeLastItemButton.addEventListener('click', function() {
    if (itemList.children.length > 0) {
        const lastItem = itemList.lastElementChild;
        itemList.removeChild(lastItem);
    }
});
