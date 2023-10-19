const sortButton = document.getElementById('sortButton');
const sortableList = document.getElementById('sortableList');

sortButton.addEventListener('click', function() {
    const listItems = Array.from(sortableList.getElementsByTagName('li'));

    listItems.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });

    while (sortableList.firstChild) {
        sortableList.removeChild(sortableList.firstChild);
    }

    listItems.forEach(function(item) {
        sortableList.appendChild(item);
    });
});
