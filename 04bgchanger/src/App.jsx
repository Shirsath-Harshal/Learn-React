import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[color,setColor]= useState();

  return (
    <>
      
<div className={`w-full h-screen ${color} flex items-center justify-center transition-all duration-500`}>

 
  <h1 className="text-4xl font-bold text-white">
    Background Changer
  </h1>

  <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-4">
    <div className="flex justify-center gap-4 overflow-x-auto">

      <button className="px-4 py-2 rounded-lg font-semibold text-red-500 hover:bg-red-100 transition" onClick={() => setColor("bg-red-400")}>
        Red
      </button>

      <button className="px-4 py-2 rounded-lg font-semibold text-blue-500 hover:bg-blue-100 transition" onClick={() =>setColor("bg-blue-200")}>
        Blue
      </button>

      <button className="px-4 py-2 rounded-lg font-semibold text-green-500 hover:bg-green-100 transition" onClick={() =>setColor("bg-green-300")}>
        Orange
      </button>

      <button className="px-4 py-2 rounded-lg font-semibold text-yellow-500 hover:bg-yellow-100 transition" onClick={() =>setColor("yellow")}>
        Yellow
      </button>

      <button className="px-4 py-2 rounded-lg font-semibold text-purple-500 hover:bg-purple-100 transition" onClick={() =>setColor("purple")}>
        Purple
      </button>

    </div>
  </div>

</div>
    </>
  )
}

export default App
