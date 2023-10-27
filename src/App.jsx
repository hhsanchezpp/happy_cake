import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import Contacto from './components/pages/Contacto/Contacto'
import Home from './components/pages/Home/Home'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/happy_cake' element={<Home/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
      </Routes>
    </>
  )
}

export default App