import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  function handleWindowWidth() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth)

    return () => {
      window.removeEventListener('resize', handleWindowWidth)
    }
  }, [])

  //variation 1 ->Every render
  // useEffect(() => {
  //   console.log('UI rendering done')
  // })

  //variation 2 -> first Render
  // useEffect(() => {
  //   console.log('UI rendering done')
  // }, [])

  //variation 3 -> on first render + whenever dependency changes
  // useEffect(() => {
  //   console.log('change observed')
  // }, [text])

  //variation 4  -> to handle unmounting of a component
  // useEffect(() => {
  //   //add event listener
  //   console.log('listener added')

  //   return () => {
  //     console.log('listener removed')
  //   }
  // }, [text])

  function changeHandler(e) {
    const newValue = e.target.value
    setText(e.target.value)
    console.log(newValue)
  }
  return (
    <div className='wrapper'>
      <label>window size: {windowWidth}</label>
      <input type='text' onChange={changeHandler}></input>
    </div>
  )
}

export default App
