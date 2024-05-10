// eslint-disable-next-line
import React from 'react'; // eslint-disable-line no-unused-vars
import DeleteUserButton from './DeleteUserButton';

const UserList = ({ users, deleteUser }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <DeleteUserButton userId={user.id} deleteUser={deleteUser} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
