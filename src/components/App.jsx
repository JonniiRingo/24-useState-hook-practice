import React, {useState} from 'react';
import React from "react"; 

let time = new Date().toLocaleTimeString();





function App() {

  const  [time, Date] = useState(0); 

  function getTime(){


  };

  function secondTime(){
    Date( setInterval(time, 1000) ); 
  };

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick = {"function"}> {time} </button> 
    </div>
  );
}



//Challenge:
//1. Given that you can get the current time using:


//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

export default App;
