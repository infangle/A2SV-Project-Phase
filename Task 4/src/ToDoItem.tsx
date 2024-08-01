// TodoItem.tsx
import React from 'react';
import TodoTypes from './to-do';

interface Props {
  todo: TodoTypes;
  onToggle: (id: number) => void;
  onEdit: (id: number, newTask: string) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newTask, setNewTask] = React.useState(todo.task);

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, newTask);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <div className='todo-item'>
      <div className='to-do-task'>
      <div className='to-do-item-checkbox'>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleToggle}
      />
      </div>
      <div className='to-do-item-text'>
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          autoFocus
        />
      ) : (
        <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
          {todo.task}
        </span>
      )}
      </div>
      </div>
      <div className='to-do-item-action'>
      {isEditing ? (
        <button className='save-button' onClick={handleSave}>Save</button>
      ) : (
        <button className='edit-button' onClick={handleEdit}>Edit</button>
      )}
      <button className='delete-button' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;