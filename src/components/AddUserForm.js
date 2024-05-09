import React, { useState } from 'react';
 const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addUser(name);
    setName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Agregar Usuario</button>
    </form>
  );
 };
 export default AddUserForm;
