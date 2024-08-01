function addTask(event) {
    var _a;
    // prevent page reload, everytime the function is called
    event.preventDefault();
    var taskInput = document.getElementById('task');
    var task = (_a = taskInput === null || taskInput === void 0 ? void 0 : taskInput.value) === null || _a === void 0 ? void 0 : _a.trim();
    var taskList = document.getElementById('displayTaskList');
    if (task != '') {
        var tasksHtml_1 = document.createElement("li");
        var checkbox_1 = document.createElement('input');
        checkbox_1.type = 'checkbox';
        //checkbox functionality
        checkbox_1.addEventListener("change", function () {
            if (checkbox_1.checked) {
                tasksHtml_1.style.textDecoration = "line-through";
            }
            else {
                tasksHtml_1.style.textDecoration = "none";
            }
        });
        tasksHtml_1.appendChild(checkbox_1);
        var taskText_1 = document.createTextNode(task);
        tasksHtml_1.appendChild(taskText_1);
        taskList.appendChild(tasksHtml_1);
        // edit button
        var editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            var editTask = prompt("Edit Task:", task);
            if (editTask != null && editTask != "") {
                taskText_1.textContent = editTask;
            }
        });
        tasksHtml_1.appendChild(editButton);
        // delete button
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            tasksHtml_1.remove();
        });
        tasksHtml_1.appendChild(deleteButton);
    }
    taskInput.value = "";
}
