const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    // Create elements
    const li = document.createElement("li");
    const taskDiv = document.createElement("div");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    // Set attributes
    taskDiv.className = "task";
    checkbox.type = "checkbox";
    span.textContent = taskText;
    deleteBtn.innerHTML = "🗑";
    deleteBtn.className = "delete-btn";

    // Events
    checkbox.addEventListener("change", () => {
        span.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    // Build DOM
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(span);
    li.appendChild(taskDiv);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}
