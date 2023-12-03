var newTaskField = document.getElementById('new-task');
let updateIndex = "";
window.addEventListener('load', () => {
    if (!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify([]))
    }
    displayTask("all");
});
function addNewTask() {
    let oldTask = JSON.parse(localStorage.getItem('tasks'))
    if (((newTaskField.value).trim()) != "") {
        let newTask = { "taskName": newTaskField.value, "isCompleted": false, "date": currentDate() };
        newTaskField.value = "";
        oldTask.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(oldTask));
        displayTask("all");
    }
    else {
        alert("Please enter task name");
        newTaskField.value = "";
    }
}
function cancelTask() {
    newTaskField.value = "";
    updateIndex = "";
    document.getElementById('addBtn').classList.remove('invisible');
    document.getElementById('updateBtn').classList.add('invisible');
}
function currentDate() {
    const date = new Date();
    return (date.getDate() + "-" + (date.getMonth() + 1) + "-" + (date.getFullYear()));
}
function displayTask(filter) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    document.getElementById('tasks-container').innerHTML = "";
    if (filter == "completed") {
        document.getElementById('all').classList.remove('active-filter');
        document.getElementById('complete').classList.add('active-filter');
        document.getElementById('pending').classList.remove('active-filter');
        tasks.map((task, index) => {
            if (task.isCompleted == true) {
                document.getElementById('tasks-container').innerHTML += `
                    <div class="tasks">
                        <div class="task-name">${task.taskName}</div>
                        <p class="status">Status : <span>${task.isCompleted ? "Completed" : "Pending"}</span></p>
                        <p class="time">${task.isCompleted ? "Completed At" : "CreatedAt"} : <span>${task.date}</span></p>
                        <div class="taskBtn-container">
                            <button class="${task.isCompleted ? "invisible" : ""}" onclick="markAsDone(${index})">Mark as Done</button>
                            <button class="${task.isCompleted ? "invisible" : ""}" onclick="editTask(${index})">Edit</button>
                            <button onclick="deleteTask(${index})">Delete</button>
                        </div>
                    </div>  
            `;
            }
        });
    }
    else if (filter == "pending") {
        document.getElementById('all').classList.remove('active-filter');
        document.getElementById('complete').classList.remove('active-filter');
        document.getElementById('pending').classList.add('active-filter');
        tasks.map((task, index) => {
            if (task.isCompleted == false) {
                document.getElementById('tasks-container').innerHTML += `
                    <div class="tasks">
                        <div class="task-name">${task.taskName}</div>
                        <p class="status">Status : <span>${task.isCompleted ? "Completed" : "Pending"}</span></p>
                        <p class="time">${task.isCompleted ? "Completed At" : "CreatedAt"} : <span>${task.date}</span></p>
                        <div class="taskBtn-container">
                            <button class="${task.isCompleted ? "invisible" : ""}" onclick="markAsDone(${index})">Mark as Done</button>
                            <button class="${task.isCompleted ? "invisible" : ""}" onclick="editTask(${index})">Edit</button>
                            <button onclick="deleteTask(${index})">Delete</button>
                        </div>
                    </div>  
            `;
            }
        });
    }
    else {
        document.getElementById('all').classList.add('active-filter');
        document.getElementById('complete').classList.remove('active-filter');
        document.getElementById('pending').classList.remove('active-filter');
        tasks.map((task, index) => {
            document.getElementById('tasks-container').innerHTML += `
                    <div class="tasks">
                        <div class="task-name">${task.taskName}</div>
                        <p class="status">Status : <span>${task.isCompleted ? "Completed" : "Pending"}</span></p>
                        <p class="time">${task.isCompleted ? "Completed At" : "CreatedAt"} : <span>${task.date}</span></p>
                        <div class="taskBtn-container">
                            <button class="${task.isCompleted ? "invisible" : ""}" onclick="markAsDone(${index})">Mark as Done</button>
                            <button class="${task.isCompleted ? "invisible" : ""}" onclick="editTask(${index})">Edit</button>
                            <button onclick="deleteTask(${index})">Delete</button>
                        </div>
                    </div>  
            `;
        });
    }

}
function markAsDone(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[index].isCompleted = true;
    tasks[index].date = currentDate();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTask("all");
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    newTaskField.value = tasks[index].taskName;
    window.scrollTo({ top: 0, behavior: "smooth" });
    updateIndex = index;
    document.getElementById('addBtn').classList.add('invisible');
    document.getElementById('updateBtn').classList.remove('invisible');
}
function updateTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (((newTaskField.value).trim()) != "") {
        tasks[updateIndex].taskName = newTaskField.value;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTask("all");
        updateIndex = "";
    }
    else {
        alert("Please enter task name");
    }
    cancelTask();
}

function deleteTask(index){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index,1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTask("all");
}