document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const categorySelect = document.getElementById("category-select");
    const dueDateInput = document.getElementById("due-date-input");
    const prioritySelect = document.getElementById("priority-select");
    const addTaskBtn = document.getElementById("add-task-btn");

    const allTasksTable = document.getElementById("all-tasks-table").getElementsByTagName('tbody')[0];
    const completedTasksTable = document.getElementById("completed-tasks-table").getElementsByTagName('tbody')[0];
    const uncompletedTasksTable = document.getElementById("uncompleted-tasks-table").getElementsByTagName('tbody')[0];

    addTaskBtn.addEventListener("click", () => {
        const task = taskInput.value.trim();
        const category = categorySelect.value;
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;
        const status = "Uncompleted";

        if (task && category && dueDate && priority) {
            const newRow = createTableRow(task, category, dueDate, priority, status);
            allTasksTable.appendChild(newRow);

            if (status === "Completed") {
                completedTasksTable.appendChild(newRow.cloneNode(true));
            } else {
                uncompletedTasksTable.appendChild(newRow.cloneNode(true));
            }

            clearInputs();
        }
    });

    function createTableRow(task, category, dueDate, priority, status) {
        const row = document.createElement("tr");
        
        const taskCell = document.createElement("td");
        taskCell.textContent = task;
        row.appendChild(taskCell);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = category;
        row.appendChild(categoryCell);

        const dueDateCell = document.createElement("td");
        dueDateCell.textContent = dueDate;
        row.appendChild(dueDateCell);

        const priorityCell = document.createElement("td");
        priorityCell.textContent = priority;
        row.appendChild(priorityCell);

        const statusCell = document.createElement("td");
        statusCell.textContent = status;
        row.appendChild(statusCell);

        return row;
    }

    function clearInputs() {
        taskInput.value = "";
        categorySelect.value = "";
        dueDateInput.value = "";
        prioritySelect.value = "low";
    }
});
