// TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit} // Asegúrate de pasar onEdit correctamente
        />
      ))}
    </ul>
  );
};

export default TodoList;

