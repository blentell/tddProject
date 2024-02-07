const createToDoList = require("../todoList");

describe("TodoList", () => {
	test("should allow adding a task", () => {
		const todoList = createToDoList();
		todoList.addTask("Learn TDD");
		expect(todoList.getTasks()).toContain("Learn TDD");
	});
	test("should allow marking a task as completed", () => {
		const todoList = createToDoList();
		todoList.addTask("Learn TDD");
		todoList.completeTask("Learn TDD");
		expect(todoList.getCompletedTasks()).toContain("Learn TDD");
	});
});
