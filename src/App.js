// eslint-disable-next-line
import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import UserCounter from './components/UserCounter';
// eslint-disable-next-line
import DeleteUserButton from './components/DeleteUserButton'; // eslint-disable-line no-unused-vars
import './App.css';

const App = () => {
  const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const [users, setUsers] = useState(savedUsers);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (name) => {
    const newUser = { id: users.length + 1, name };
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
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
          <h2>Lista de Usuarios</h2>
          <UserList users={users} deleteUser={deleteUser} />
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
