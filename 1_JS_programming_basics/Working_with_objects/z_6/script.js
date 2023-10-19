const onlineStore = {
    products: [
      { name: "Футболка", price: 20 },
      { name: "Джинсы", price: 40 },
      { name: "Обувь", price: 60 },
    ],
    cart: [],
  
    
    addToCart: function (productName) {
      const product = this.products.find((item) => item.name === productName);
  
      if (product) {
        this.cart.push(product);
        return `${productName} добавлен в корзину.`;
      } else {
        return `${productName} не найден в магазине.`;
      }
    },
  
   
    removeFromCart: function (productName) {
      const index = this.cart.findIndex((item) => item.name === productName);
  
      if (index !== -1) {
        this.cart.splice(index, 1);
        return `${productName} удален из корзины.`;
      } else {
        return `${productName} не найден в корзине.`;
      }
    },
  
   
    calculateTotal: function () {
      const total = this.cart.reduce((sum, product) => sum + product.price, 0);
      return `Общая стоимость заказа: $${total}`;
    },
  };
  
 
  console.log(onlineStore.addToCart("Футболка"));
  console.log(onlineStore.addToCart("Джинсы"));
  console.log(onlineStore.addToCart("Обувь"));
  console.log(onlineStore.calculateTotal());
  console.log(onlineStore.removeFromCart("Джинсы"));
  console.log(onlineStore.calculateTotal());
  