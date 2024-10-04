JavaScript (script.js)
document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
    
}