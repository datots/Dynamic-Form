import React, { useState } from "react";
import "./App.css";
import AddUser from "./Components/UserForm/UserForm";
import UserList from "./Components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const removeUserHandler = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId))
  }
  const addUserHandler = (newUser) => {
    newUser.id = Math.random().toString()
    setUsers((prevUsers) => [...prevUsers, newUser])
  }

  return (
    <div className="App">
      <AddUser onaddUser={addUserHandler} />
      <UserList users={users} onRemoveUser={removeUserHandler}/>
    </div>
  );
}

export default App;
