import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserGreeting from './render'

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} username="yash" />
      <button>Click</button>
    </>
  )
}

export default App
