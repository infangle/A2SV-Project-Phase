// TodoList.tsx
import React, { useState } from 'react';
import TodoItem from './ToDoItem';
import TodoTypes from './to-do';
import './ToDoList.css';

const initialTodos: TodoTypes[] = [];

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTask, setNewTask] = useState('');

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTodo: TodoTypes = {
        id: todos.length + 1,
        task: newTask,
        complete: false,
      };
      setTodos([...todos, newTodo]);
      setNewTask('');
    }
  };

  const handleEdit = (id: number, newTask: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="main-container">
      <h2 className="title">I will do ...</h2>
      <div className="input-card">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add new task here"
          className="input-field"
        />
        <button onClick={handleAddTask} className="add-button">
          Add
        </button>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;