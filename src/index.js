function buildToDo(task) {
	const taskList = document.getElementById("tasks");
	const taskName = document.createElement("li");
	taskName.textContent = task;

	taskList.append(taskName);
}

const form = document.querySelector("#create-task-form");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const newTask = document.querySelector("#new-task-description").value;

	buildToDo(newTask);
});
