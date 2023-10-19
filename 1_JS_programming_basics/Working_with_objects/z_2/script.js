const counter = {
    value: 0, 
  
    increment: function () {
      this.value++;
    },
  
    decrement: function () {
      this.value--;
    },
  
    getValue: function () {
      return this.value;
    },
  };
  
  console.log("Текущее значение счетчика: " + counter.getValue());
  
  counter.increment(); // Увеличиваем счетчик на 1
  console.log("Текущее значение счетчика: " + counter.getValue());
  
  counter.decrement(); // Уменьшаем счетчик на 1
  console.log("Текущее значение счетчика: " + counter.getValue());
  