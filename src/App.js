import React, {useState} from 'react';
import './App.css';

function App() {

  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  function UpdateTime () {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <h1>{currentTime}</h1>
    </>
  );
}

export default App;