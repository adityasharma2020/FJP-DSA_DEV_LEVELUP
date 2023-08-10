import React, { useState } from 'react'
import data from './data.js'
import Tours from './Component/Tours'

const App = () => {
  const [tours, setTours] = useState(data)

  return (
    <div>
      <h1>Plan With Aditya</h1>

      <Tours tours={...tours}></Tours>
    </div>
  )
}

export default App
