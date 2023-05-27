const TodoList = artifacts.require("TodoList");

contract("TodoList", () => {
  it("should add and remove to-do items", async () => {
    const todoList = await TodoList.deployed();

    await todoList.addTodo("Buy milk");
    await todoList.addTodo("Do laundry");

    const todoCount = await todoList.todoCount();
    assert.equal(todoCount, 2, "Incorrect number of to-do items");

    const todo1 = await todoList.todos(0);
    assert.equal(todo1, "Buy milk", "Incorrect to-do item at index 0");

    const todo2 = await todoList.todos(1);
    assert.equal(todo2, "Do laundry", "Incorrect to-do item at index 1");

    await todoList.removeTodo(0);
    const updatedTodoCount = await todoList.todoCount();
    assert.equal(updatedTodoCount, 1, "Incorrect number of to-do items after removing one");

    const updatedTodo = await todoList.todos(0);
    assert.equal(updatedTodo, "Do laundry", "Incorrect to-do item at index 0 after removing one");
  });
});