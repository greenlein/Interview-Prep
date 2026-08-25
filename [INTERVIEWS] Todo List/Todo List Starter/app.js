const inputText = document.querySelector(".todo__text");
const list = document.querySelector(".list");

let task = null;
let taskList = [];

function handleInput(event) {
  task = event.target.value;
}

function addTask() {
  if (task) {
    taskList.push(task);
    taskHTML();
  }
  task = null;
}

function deleteTask(id) {
  taskList.splice(id, 1);
  taskHTML();
}

function taskHTML() {
  list.innerHTML = taskList
    .map((task, i) => {
      return `      
        <li>
          ${task}
          <button class="todo__delete" onclick=deleteTask(${i})>x</button>
        </li>
      `;
    })
    .join("");
}

//My solution uses the array index for the unique IDs used to delete tasks. David's turns each task into an object {task : 'task' , id : 'id'} 