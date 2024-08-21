import React, { useState } from 'react';
import useTodoStore from './store'; // Zustand store joylashgan fayl

 export const TodoList = () => {
  const [todoText, setTodoText] = useState('');
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false
    };
    addTodo(newTodo);
    setTodoText('');
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
