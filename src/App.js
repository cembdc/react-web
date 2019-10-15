import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const [message, setMessage] = React.useState('React Web Project');

  const handleClick = () => setMessage("Welcome!");

  return (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <button onClick = {handleClick}>
          Click Me!
        </button>
      </header>
    </div>
  )
};



export default App;
