import React from 'react';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  } else {
    return <h1>Hello, Stranger.</h1>;
  }
}

const user = {
  firstName: 'Guido',
  lastName: 'Pallas'
};

const element = (getGreeting(user));

function App() {
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
