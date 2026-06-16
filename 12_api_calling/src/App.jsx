import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [userData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  async function getUsersData() {
    const url = "https://dummyjson.com/users";

    let response = await fetch(url);
    response = await response.json();

    setUsersData(response.users);
  }

  return (
    <div>
      <h1>Fetch Data from API</h1>

      <ul className="user-list header">
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
      </ul>

      {userData.map((user) => (
        <ul className="user-list" key={user.id}>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.age}</li>
        </ul>
      ))}
    </div>
  );
};

export default App;