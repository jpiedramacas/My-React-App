import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEdit, onDuplicate }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          onDuplicate={onDuplicate} // Asegúrate de pasar onDuplicate correctamente
        />
      ))}
    </ul>
  );
};

export default TodoList;
