const taskManager = {
    tasks: [],
  
    addTask: function (taskText) {
      const newTask = {
        text: taskText,
        completed: false, 
      };
      this.tasks.push(newTask);
      return `${taskText} добаван в список задач.`;
    },
  
    completeTask: function (taskText) {
      for (const task of this.tasks) {
        if (task.text === taskText) {
          if (!task.completed) {
            task.completed = true;
            return `${taskText} отмечена как выполненная.`;
          } else {
            return `${taskText} уже выполнена.`;
          }
        }
      }
      return `${taskText} не найдена в списке задач.`;
    },
  
    uncompleteTask: function (taskText) {
      for (const task of this.tasks) {
        if (task.text === taskText) {
          if (task.completed) {
            task.completed = false;
            return `${taskText} отмечена как не выполненная.`;
          } else {
            return `${taskText} уже не выполнена.`;
          }
        }
      }
      return `${taskText} не найдена в списке задач.`;
    },
  
    displayTasks: function () {
      if (this.tasks.length === 0) {
        return "Список задач пуст.";
      }
      const taskList = this.tasks.map((task) =>
        task.completed ? `[X] ${task.text}` : `[ ] ${task.text}`
      );
      return `Список задач:\n${taskList.join("\n")}`;
    },
  };
  
  console.log(taskManager.addTask("Помыть посуду"));
  console.log(taskManager.addTask("Сделать уроки"));
  console.log(taskManager.displayTasks());
  console.log(taskManager.completeTask("Помыть посуду"));
  console.log(taskManager.displayTasks());
  console.log(taskManager.uncompleteTask("Помыть посуду"));
  console.log(taskManager.displayTasks());
  