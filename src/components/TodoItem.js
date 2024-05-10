import React, { useState } from 'react';

const TodoItem = ({ todo, index, onDelete, onEdit, onDuplicate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(index, editedText);
    setIsEditing(false);
  };

  const handleDuplicate = () => {
    onDuplicate(index);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Guardar</button>
        </>
      ) : (
        <>
          <span>{todo}</span>
          <div>
            <button onClick={handleEdit} className="edit-btn">Editar</button>
            <button onClick={() => onDelete(index)} className="delete-btn">Eliminar</button>
            <button onClick={handleDuplicate} className="duplicate-btn">Duplicar</button> {/* Agrega el botón Duplicar */}
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
