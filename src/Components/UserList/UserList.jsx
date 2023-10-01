import React from "react";

const UserList = ({ users, onRemoveUser }) => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.lastName}, {user.age} years old - {user.email}
            <button onClick={() => onRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
