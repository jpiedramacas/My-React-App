import React from 'react';

const DeleteUserButton = ({ userId, deleteUser }) => {
  const handleClick = () => {
    deleteUser(userId);
  };

  return (
    <button onClick={handleClick}>Eliminar</button>
  );
};

export default DeleteUserButton;
