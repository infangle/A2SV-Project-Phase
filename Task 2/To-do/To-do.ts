function addTask(event: Event){
    // prevent page reload, everytime the function is called
    event.preventDefault();
    
    const taskInput = document.getElementById('task') as HTMLInputElement;
    const task = taskInput?.value?.trim();

    
    
    
    let taskList = document.getElementById('displayTaskList') as HTMLInputElement;

    if (task != ''){
        const tasksHtml = document.createElement("li");
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        //checkbox functionality

        checkbox.addEventListener("change",function(){
            if (checkbox.checked) {
                tasksHtml.style.textDecoration = "line-through";
            }
            else{
                tasksHtml.style.textDecoration = "none";
            } 
        }
);

        tasksHtml.appendChild(checkbox);
        const taskText = document.createTextNode(task);
        tasksHtml.appendChild(taskText);
        taskList.appendChild(tasksHtml);


        // edit button
        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function(){
            const editTask = prompt("Edit Task:", task);

            if (editTask != null && editTask != ""){
                taskText.textContent = editTask;
            }
        })
        tasksHtml.appendChild(editButton);

        // delete button

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function (){
            tasksHtml.remove();
        })
        tasksHtml.appendChild(deleteButton);



    }
    taskInput.value = "";
}

