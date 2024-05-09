import React from 'react';

const DeleteUserButton = ({ userId, deleteUser }) => {
  const handleClick = () => {
    // Llama a la función deleteUser pasando el userId como parámetro
    deleteUser(userId);
  };

  return (
    <button onClick={handleClick}>Eliminar</button>
  );
};

export default DeleteUserButton;

