const taskInput = document.getElementById('taskInput');
const todoListUL = document.getElementById('todoListUL');
const formTask = document.getElementById('formTask');
const btnAddTask = document.getElementById('btnAddTask');
const btnDeleteAll = document.getElementById('btnDeleteAll');

// Creating a function to add a task
const addTask = () => {
    // Creating a variable "task" that will take the value of the "taskInput" and trim any whitespace from the start or end of the string.
    const task = taskInput.value.trim();    
    
    // Creating an if/else statement that check to see if the "task" variable is not equal to empty. 
    if(task !== '') {
        // If true, the function will then create a new variable, "newTask" that creates a new list item.
        const newTask = document.createElement('li');
        newTask.classList.add('display-6');
        // "newTask" will then set the text content of itself equal to the variable of "task"
        newTask.textContent = task;
        // Create a new variable "deleteButton" that creates a new Button element.
        const deleteButton = document.createElement('button');
        // Set "deleteButton" background color to red using bootstrap by adding in classes to the delete button
        deleteButton.classList.add('btn', 'btn-danger');
        // Set the "deleteButton" text content to 'Delete'
        deleteButton.textContent = 'DELETE';
        // create a 'click' event listener for "deleteButton" that creates a function to remove the "newTask" from the "todoListUL"
        deleteButton.addEventListener('click', () => {
            todoListUL.removeChild(newTask);
        });
        // add the "deleteButton" to "newTask"
        newTask.appendChild(deleteButton);
        // add the "newTask" to "toDoListUL"
        todoListUL.appendChild(newTask);
        // default the value of the "taskInput" to an empty string ''
        taskInput.value = '';
    }
}

formTask.addEventListener('submit', function(event) {
    event.preventDefault();
  });

btnAddTask.addEventListener('click', addTask);

