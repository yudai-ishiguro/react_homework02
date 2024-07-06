import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button />
    <Header />
    </>
  )
}

export default App
