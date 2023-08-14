import { useState } from 'react'
import './App.css'

function App() {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  // console.log('first name', firstName)
  // function changeFirstHandler(event) {
  //   console.log('first ', event.target)
  //   setFirstName(event.target.value)
  // }

  // function changeLastHandler(event) {
  //   console.log('last ', event.target)
  //   setLastName(event.target.value)
  // }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isVisible: true,
    mode: '',
    favCar: '',
  })
  console.log(formData)

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault()

    console.log('finally printing the entire form ')
    console.log(formData)
  }

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='first name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />
        <br />
        <input
          type='text'
          placeholder='first name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />

        <br />
        <input
          type='email'
          placeholder='email'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <br />

        <textarea
          placeholder='enter some comment'
          name='comments'
          onChange={changeHandler}
          value={formData.comments}
        />
        <br />

        <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          checked={formData.isVisible}
          id='isVisible'
        />
        <label htmlFor='isVisible'>am i visible ?</label>
        <br />

        <fieldset>
          <legend>Mode:</legend>
          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value='Online-Mode'
            id='Online-mode'
            checked={formData.mode === 'Online-Mode'}
          />
          <label htmlFor='Online-mode'>Online Mode</label>

          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value='Offline-Mode'
            id='Offline-mode'
            checked={formData.mode === 'Offline-Mode'}
          />
          <label htmlFor='Offline-mode'>Offline Mode</label>
        </fieldset>
        <br />

        <label htmlFor='favCar'>tell me favCar?</label>
        <select
          onChange={changeHandler}
          name='favCar'
          id='favCar'
          value={formData.favCar}
        >
          <option value='Scorpio'>Scorpio</option>
          <option value='fortuner'>fortuner</option>
          <option value='thar'>thar</option>
        </select>

        <br></br>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
