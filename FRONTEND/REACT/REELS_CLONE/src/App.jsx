import { useState } from 'react'
import './App.css'
import Login from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Reels clone</h1>
      <Login></Login>
      {/* Login page */}
      {/* Signup page */}
      {/* Feeds page */}
      {/* Profile page */}
    </div>
  )
}

export default App
