import './App.css'

function App() {
  function changeHandler(event) {
    console.log(event.target)
  }
  return (
    <div className='App'>
      <form>
        <input type='text' placeholder='first name' onChange={changeHandler} />
      </form>
    </div>
  )
}

export default App
