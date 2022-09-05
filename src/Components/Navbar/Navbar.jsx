// import "./Navbar.module.scss"
import React, { useState, useEffect } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu'
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav
      
    >
       <h1 className='mbtn' style={{ color: 'white',position:"sticky",textAlign:"left",marginLeft:"0.5rem" }}>İlkin Quluzadə</h1>
      {
      (toggleMenu || screenWidth > 800) && (
        <ul className="list">
          <li className="items">
            <a href="#anasehife">Ana Səhifə</a>
          </li>
          <li className="items">
            <a href="#haqqimda">Haqqımda</a>
          </li>
          <li className="items">
            <a href="#bacariqlarim">Bacarıqlarım</a>
          </li>
          <li className="items">
            <a href="#portfolio">Gördüyüm işlər</a>
          </li>
          <li className="items">
            <a href="#elaqe">Əlaqə</a>
          </li>
        </ul>
      )}

      
     
      <button onClick={toggleNav} className="mbtn">
        <MenuIcon style={{ color: 'white' }} />
      </button>
    </nav>
  )
}
