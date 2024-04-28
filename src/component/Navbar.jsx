import React, { useState } from 'react'
import "./Style.css"
import logo from '../assets/logoooo.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [ham, setham] = useState(true)

  let navigate = useNavigate()

  return (
    <nav>
      <div className="logo" onClick={()=>navigate("/")}><img src={logo} alt="" /></div>
      <ul className={ ham ? "menus menuopen" : "menus"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/partners">Parteners</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/devlopers">Devlopers</Link></li>
      </ul>
      <div className='ham' onClick={()=> {setham(!ham)}}>
        {
          ham ?
          <i className="fa-solid fa-bars"></i>
          :
          <i className="fa-solid fa-xmark"></i>
        }
      </div>
    </nav>
  )
}

export default Navbar