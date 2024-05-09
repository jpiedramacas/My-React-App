import React from 'react';
 import UserInterface from '../interfaces/UserInterface';
 const UserList = ({ users }) => {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
 };
 export default UserList;
