import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = ()=>{
    setCount(count++);
  }
  return (
    <> 
      <h1>Chai aur code</h1>

      <button onClick={addValue}>Add value {count}</button>
    </>
  )
}

export default App
