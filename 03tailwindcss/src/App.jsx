import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3 className='mb-4 '>Chai aur code</h3>

      
     <Card userName='Harshal Shirsath' index={Math.floor(Math.random() * 10)}/>
     <Card userName='Gaurav Patil' body='patil`s boy from shahda' index={Math.floor(Math.random() * 10)}/>
    </>
  )
}

export default App
