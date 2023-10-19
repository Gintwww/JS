const shoppingList = {
    items: [], 
  
    addItem: function (item) {
      this.items.push(item);
      return `${item} добавлен в список покупок.`;
    },
  
    removeItem: function (item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
        return `${item} удален из списка покупок.`;
      } else {
        return `${item} не найден в списке покупок.`;
      }
    },
  
    displayList: function () {
      if (this.items.length === 0) {
        return "Список покупок пуст.";
      } else {
        return `Список покупок: ${this.items.join(", ")}`;
      }
    },
  };
  
  console.log(shoppingList.addItem("Яблоки")); 
  console.log(shoppingList.addItem("Молоко"));
  console.log(shoppingList.displayList()); 
  console.log(shoppingList.removeItem("Молоко"));
  console.log(shoppingList.displayList()); 
  console.log(shoppingList.removeItem("Хлеб"));
  