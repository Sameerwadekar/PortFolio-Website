import React,{useContext} from 'react'
import { ThemeContext } from './themeContext'


function Footer({data}) {
  const {darkMode,toggleTheme} = useContext(ThemeContext)
  return (
    <>
    <div className="container-fluid">
      <div className="container">
  <nav className={`navbar navbar-expand-lg d-flex justify-content-between ${ darkMode ? "bg-black" : "bg-white"}`}>
  <div className="container-fluid d-flex justify-content-between">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
        <li className="nav-item">
          <a className={`nav-link ${darkMode ? "text-white" : "text-black"} aria-current="page" href="#"`}>Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${darkMode ? "text-white" : "text-black"}`} href="#">About</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${darkMode ? "text-white" : "text-black"}`} href="#">Tech-Stack</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${darkMode ? "text-white" : "text-black"}`} href="#">Project</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${darkMode ? "text-white" : "text-black"}`} href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
    </>
  )
}

export default Footer
