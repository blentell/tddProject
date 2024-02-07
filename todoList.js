function createToDoList() {
    const tasks = [];
    const completedTasks = [];

    function addTask(task) {
        tasks.push(task)
    }

    function completeTask(task) {
        const taskIndex = tasks.indexOf(task)
        if (taskIndex > -1) {
            tasks.splice(taskIndex, 1)
            completedTasks.push(task);
        }
    }
    function getTasks() {
        return tasks;
    }
    function getCompletedTasks() {
        return completedTasks;
    }
    return {addTask, getTasks, completeTask, getCompletedTasks}
}

module.exports = createToDoList;