document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newTodo = document.getElementById('new-todo').value;

    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = newTodo;
    todoList.appendChild(li);

    // Clear the input
    document.getElementById('new-todo').value = '';
});
