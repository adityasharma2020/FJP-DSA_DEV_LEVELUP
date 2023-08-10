import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  function decreaseHandler() {
    setCount(count-1)
  }

  function increaseHandler(){
    setCount(count+1)
  }

  function resetHandler(){
    setCount(0)
  }

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#344151] gap-10'>
      <div className='text-[#0398d4] font-medium text-2xl'>
        Increment and decrement
      </div>
      <div className='flex justify-center gap-12 py-3 text-[25px] rounded-md text-[#344151] bg-white'>
        <button onClick={decreaseHandler} className='w-20 border-[#bfbfbf] border-r-2 text-center text-5xl'> - </button>
        <div className='font-bold gap-12 text-5xl'>{count}</div>
        <button onClick={increaseHandler}  className='w-20 border-[#bfbfbf] border-l-2 text-center text-5xl'> + </button>
      </div>

      <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-md text-lg' >Reset</button>
    </div>
  )
}

export default App
