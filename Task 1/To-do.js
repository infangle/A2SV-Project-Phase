function addTask(e){
    // prevent page reload, everytime the function is called
    e.preventDefault();
    
    let task = document.getElementById('task').value.trim();
    
    let taskList = document.getElementById('displayTaskList');

    if (task != ''){
        let tasksHtml = document.createElement("li");
        let checkbox = document.createElement('input');
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
        let taskText = document.createTextNode(task);
        tasksHtml.appendChild(taskText);
        taskList.appendChild(tasksHtml);


        // edit button
        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function(){
            let editTask = prompt("Edit Task:", task);

            if (editTask != null && editTask != ""){
                taskText.textContent = editTask;
            }
        })
        tasksHtml.appendChild(editButton);

        // delete button

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function (){
            tasksHtml.remove();
        })
        tasksHtml.appendChild(deleteButton);



    }
    document.getElementById('task').value = "";
}

