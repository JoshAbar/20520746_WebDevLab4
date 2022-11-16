import './App.css';
import * as React from 'react';

function fetUser() {
  return new Promise((resolve) => {
    setTimeout( () => {
      resolve({
        id: 1,
        name: 'Adam'
      });
    }, 1000);
  });
}

function App() {
  const [id, setId] = React.useState("Loading...");
  const [name, setName] = React.useState("Loading...");

  React.useEffect( () => {
    fetUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });
  });

  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  );
}

export default App;
