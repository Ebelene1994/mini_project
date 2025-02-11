// Counter App Logic
const counterValue = document.getElementById('counter-value');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let counter = 0;

incrementButton.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});

decrementButton.addEventListener('click', () => {
    counter--;
    counterValue.textContent = counter;
});

// JavaScript for the To-Do List App
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');
const priorityInput = document.getElementById('priorityInput');
const categoryInput = document.getElementById('categoryInput');
const descriptionInput = document.getElementById('descriptionInput');
const notesInput = document.getElementById('notesInput');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskName = taskInput.value.trim();
    const dueDate = dateInput.value.trim();
    const priority = priorityInput.value.trim();
    const category = categoryInput.value.trim();
    const description = descriptionInput.value.trim();
    const notes = notesInput.value.trim();

    if (taskName && dueDate && priority && category && description && notes) {
        const listItem = document.createElement('li');

        const taskDetails = {
            taskName,
            dueDate,
            priority,
            category,
            description,
            notes
        };

        const taskTextNode = document.createElement('span');
        taskTextNode.textContent = taskName;
        listItem.appendChild(taskTextNode);

        listItem.addEventListener('click', () => {
            alert(`Task: ${taskDetails.taskName}\nDue Date: ${taskDetails.dueDate}\nPriority: ${taskDetails.priority}\nCategory: ${taskDetails.category}\nDescription: ${taskDetails.description}\nNotes: ${taskDetails.notes}`);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            taskList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
        dateInput.value = '';
        priorityInput.value = '';
        categoryInput.value = '';
        descriptionInput.value = '';
        notesInput.value = '';
    } else {
        alert('Please fill out all fields.');
    }
});
