import React from 'react'

const App = () => {
  localStorage.setItem('user', 'Sejal');

  const user = localStorage.getItem('user');

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default App;
