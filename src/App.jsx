import React from 'react';
import UserForm from './components/UserForm.jsx';
import UserList from './components/UserList.jsx';

function App() {
  return (
    <div>
      <h1>User CRUD App</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
