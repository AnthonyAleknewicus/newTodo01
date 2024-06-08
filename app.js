const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const formTask = document.getElementById('formTask');
const btnAddTask = document.getElementById('btnAddTask');
const btnDeleteAll = document.getElementById('btnDeleteAll');

// Creating a function to add a task
const addTask = () => {
    // Creating a variable "task" that will take the value of the "taskInput" and trim any whitespace from the start or end of the string.
    const task = taskInput.value.trim();    
    
    // Creating an if statement that check to see if the "task" variable is not equal to empty. 
    if(task !== '') {
        // If true, the function will then create a new variable, "newTask" that creates a new list item.
        const newTask = document.createElement('li');
        // adding the class of "lead" to the "newTask" list items
        newTask.classList.add('blockquote');
        // applying flexbox properties to align the delete button to the right
        newTask.style.display = 'flex';
        newTask.style.justifyContent = 'space-between';
        // create a new element for the text of "newTask"
        const newTaskText = document.createElement('span');
        // "newTask" will then set the text content of itself equal to the variable of "task"
        newTaskText.textContent = task; 
        newTaskText.id = 'taskText'
        // toggling the bootstrap class of "text-decoration-line-through" so that a line will appear/disapper through "newTask" list item when clicked
        newTaskText.addEventListener('click', function() {
            this.classList.toggle('text-decoration-line-through');
            
        });    
        newTask.appendChild(newTaskText);
        // created a new variable "deleteButton" that creates a new Button element
        const deleteButton = document.createElement('button');
        // set "deleteButton" background color to red using bootstrap by adding in classes to the delete button
        deleteButton.classList.add('btn', 'btn-danger');
        // set a fixed width and height for "deleteButton "
        deleteButton.style.width = '60px';
        deleteButton.style.height = '30px';
        deleteButton.style.fontSize = '10px';
        deleteButton.style.marginLeft = '1.5em'
        // Set the "deleteButton" text content to 'Delete'
        deleteButton.textContent = 'DELETE';
        // create a 'click' event listener for "deleteButton" that creates a function to remove the "newTask" from the "todoListUL"
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(newTask);
        });
        // add the "deleteButton" to "newTask"
        newTask.appendChild(deleteButton);
        // add the "newTask" to "toDoListUL"
        taskList.appendChild(newTask);
        // default the value of the "taskInput" to an empty string ''
        taskInput.value = '';
        
    }
}

const deleteAllTasks = () => {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}


formTask.addEventListener('submit', function(event) {
    event.preventDefault();
  });

btnAddTask.addEventListener('click', addTask);

btnDeleteAll.addEventListener('click', deleteAllTasks)

