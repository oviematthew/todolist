// Module pattern
const TodoApp = (function() {
    const tasks = [];
    let currentId = 1;
  
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
  
    addButton.addEventListener("click", addTask);
  
    function addTask() {
      const taskTitle = taskInput.value;
      if (taskTitle) {
        const task = {
          id: currentId,
          title: taskTitle,
          completed: false,
        };
  
        tasks.push(task);
        currentId++;
        renderTasks();
        taskInput.value = "";
      }
    }
  
    function toggleTaskCompletion(id) {
      const task = tasks.find(task => task.id === id);
      if (task) {
        task.completed = !task.completed;
        renderTasks();
      }
    }
  
    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.textContent = task.title;
        taskItem.classList.add("task-item");
        if (task.completed) {
          taskItem.classList.add("completed");
        }
        taskItem.addEventListener("click", () => toggleTaskCompletion(task.id));
        taskList.appendChild(taskItem);
      });
    }
  
    // Public methods and properties
    return {
      renderTasks: renderTasks,
    };
  })();
  