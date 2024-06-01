import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([ {text: 'Coding Challenge ' ,completed : false } , {text: 'Meet up project 4:00' , completed: false} , {text: 'Amazon Delivery' , completed:false}]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo.trim(), completed: false }]);
      setNewTodo('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleMarkTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const currentDate = new Date().toLocaleDateString('en-us', options);

  return (
    <div className="container p-6 mx-auto my-8 bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Todo List</h1>
      <div className="px-4 py-3 font-bold text-green-500">{currentDate}</div>
      <div className="flex mb-6">
        <input
          type="text"
          value={newTodo}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="px-6 py-3 text-white transition-colors duration-300 bg-blue-500 rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex items-center justify-between px-4 py-3 transition-colors duration-300 rounded-md ${
              todo.completed ? 'bg-gray-200 line-through text-gray-500' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <span className="font-medium">{todo.text}</span>
            <div>
              <button
                onClick={() => handleMarkTodo(index)}
                className={`px-4 py-2 text-white duration-100 ${
                  todo.completed ? 'bg-black hover:bg-black' : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {todo.completed ? 'Unmark' : 'Mark'}
              </button>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="px-4 py-2 ml-2 text-white transition-colors duration-300 bg-red-500 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;