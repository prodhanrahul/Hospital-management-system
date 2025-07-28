import React from 'react'
import { Routes,Route } from 'react-router-dom'


import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Footer from './Components/Footer'
import About from './Components/About'
import Appontment from './Components/Appontment'
import Depeartment from './Components/Depeartment'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
const App = () => {
  return (
    <div>
      <header><Navigation/></header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/appointment' element={<Appontment/>}/>
        <Route path='/depeartment' element={<Depeartment/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <footer> <Footer/></footer>
     
    </div>
  )
}

export default App
