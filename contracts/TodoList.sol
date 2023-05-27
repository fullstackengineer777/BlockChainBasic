pragma solidity ^0.5.0;

contract TodoList {

    uint public todoCount = 0;
    string[] public todos;

    constructor() public {
        addTodo("Todo1(default)");
    }

    struct Todo{
        uint id;
        string name;
        bool completed;
    }

    // mapping(uint => Todo) public todos;

    function addTodo(string memory _name) public {
        todoCount++;
        todos.push(_name);
        // todos[todoCount] = Todo(todoCount, _name, false);
    }

    function removeTodo(uint _index) public {
        delete todos[_index];
        todoCount--;
    }
    

}