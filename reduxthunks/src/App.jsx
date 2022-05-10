
import './App.css'
import { Nav } from './components/Nav'
import { Route, Routes } from 'react-router'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import {UserData} from './components/Home'


function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
          <Route path="/Dashboard" element={<UserData />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
   
        </Routes>
    </div>
  )
}

export default App
