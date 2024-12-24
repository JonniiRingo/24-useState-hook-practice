import React, {useState} from 'react';

function App() {

  const date = new Date().toLocaleTimeString();

  const  [time, setTime] = useState(date); 

  function getTime(){
    const newDate = new Date().toLocaleTimeString(); 
    setTime(newDate); 
  };

 
  setInterval(getTime, 8000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick = {getTime}>Get Time</button> 
    </div>
  );
}



export default App;
