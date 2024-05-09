import React, { useState } from 'react';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import UserCounter from './components/contador';
 
const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Juan' },
    { id: 2, name: 'María' },
  ]);
 
  const addUser = (name) => {
    const newUser = { id: users.length + 1, name };
    setUsers([...users, newUser]);
  };
 
  return (
<div>
<h1>Administrador de Usuarios</h1>
<UserList users={users} />
<AddUserForm addUser={addUser} />
<UserCounter users={users} />
</div>
  );
};
 
export default App;
