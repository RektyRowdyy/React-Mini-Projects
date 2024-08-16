import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter+=1);
    console.log("value added", counter);
    
  }

  const removeValue = () => {
    setCounter(counter-=1);
    console.log("value added", counter);
  }

  return (
    <>
      <h1>React with Rekty</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
