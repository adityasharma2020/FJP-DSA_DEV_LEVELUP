import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useDispatch } from 'react-redux'
import { logout } from './features/userSlice'
function App() {
  const dispatch = useDispatch()
  return (
    <div className='dark'>
      <button onClick={() => {dispatch(logout())}}>logout</button>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
