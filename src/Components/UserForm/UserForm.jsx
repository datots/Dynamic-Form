import React from "react";
import { useState } from "react";

const UserForm = ({ onaddUser }) => {
  const [userName, setUserName] = useState("");
  const [userlastName, setUserLastName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userMail, setUserMail] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const newUser = {
      name: userName,
      lastName: userlastName,
      age: userAge,
      email: userMail,
    };
    onaddUser(newUser);
    setUserName("");
    setUserLastName("");
    setUserAge("");
    setUserMail("");
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-[#6366F1]">
      <form onSubmit={addUserHandler}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">
            Username
          </label>
          <input
            className="border p-2 w-full"
            id="username"
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-gray-600">
            Last Name
          </label>
          <input
            className=" border p-2 w-full"
            id="last"
            type="text"
            value={userlastName}
            onChange={(event) => setUserLastName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-600">
            Age
          </label>
          <input
            className="border p-2 w-full"
            id="age"
            type="number"
            value={userAge}
            onChange={(event) => setUserAge(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            className="border p-2 w-full"
            id="main"
            type="email"
            value={userMail}
            onChange={(event) => setUserMail(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
