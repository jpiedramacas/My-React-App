import React, { useState } from 'react';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import UserCounter from './components/contador';
import DeleteUserButton from './components/eliminar'; // Corregir la importación si es necesario
import './App.css'; // Archivo CSS para estilos personalizados

const App = () => {
  const [users, setUsers] = useState([
 
  ]);

  const addUser = (name) => {
    const newUser = { id: users.length + 1, name };
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    // Filtra los usuarios para eliminar el usuario con el userId dado
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <header>
        <h1>Administrador de Usuarios</h1>
      </header>
      <div className="content">
        <section className="user-list">
         
          <UserList users={users}>
            {users.map(user => (
              <div key={user.id}>
                <span>{user.name}</span>
                <DeleteUserButton userId={user.id} deleteUser={deleteUser} />
              </div>
            ))}
          </UserList>
        </section>
        <section className="add-user-form">
          <h2>Agregar Nuevo Usuario</h2>
          <AddUserForm addUser={addUser} />
        </section>
        <aside className="user-counter">
          <h2>Contador de Usuarios</h2>
          <UserCounter users={users} />
        </aside>
      </div>
      <footer>
        <p>&copy; 2024 Administrador by Geovanny JP</p>
      </footer>
    </div>
  );
};

export default App;
