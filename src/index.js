document.addEventListener("DOMContentLoaded", () => {
	// your code here
	function buildToDo(task) {
		const taskList = document.getElementById("tasks");
		const taskName = document.createElement("li");
		taskName.textContent = task;

		taskList.append(taskName);
	}

	const form = document.querySelector("#create-task-form");

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const newTask = event.target["new-task-description"].value;

		buildToDo(newTask);
	});
});
