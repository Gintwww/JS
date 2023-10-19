const bankAccount = {
    balance: 0, 
  
    deposit: function (amount) {
      if (amount > 0) {
        this.balance += amount;
        return `Вы внесли ${amount} на счет. Новый баланс: ${this.balance}`;
      } else {
        return "Сумма для депозита должна быть больше 0.";
      }
    },
  
    withdraw: function (amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return `Вы сняли ${amount} со счета. Новый баланс: ${this.balance}`;
      } else {
        return "Недостаточно средств на счете или указана неверная сумма.";
      }
    },
  
    getBalance: function () {
      return `Текущий баланс: ${this.balance}`;
    },
  };
  
  console.log(bankAccount.getBalance()); 
  console.log(bankAccount.deposit(1000)); 
  console.log(bankAccount.withdraw(500));
  console.log(bankAccount.getBalance()); 
  console.log(bankAccount.withdraw(1000)); 