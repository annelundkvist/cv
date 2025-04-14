import React, { useState } from 'react'
import '../styles/Navbar.css'
import { ReactComponent as BurgerIcon } from '../assets/menu-svgrepo-com (1).svg';


const Navbar = () => {

const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

const closeMenu = () => setClick(false)

return (
    <div className='header'>
        <nav className='navbar'>
            <a href="#home" className='logo'>
               <h1>Anne Lundkvist</h1>
            </a>
            <div className='hamburger' onClick={handleClick}>
            <BurgerIcon className="burger" />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
               
                <li className='nav-item'>
                    <a href='#experience' onClick={closeMenu}>Erfaring</a>
                </li>

                <li className='nav-item'>
                    <a href='#skills' onClick={closeMenu}>Kompetencer</a>
                </li>
                <li className='nav-item'>
                    <a href='#education' onClick={closeMenu}>Uddannelse</a>
                </li>
               
                <li className='nav-item'>
                    <a href='#about' onClick={closeMenu}>Om </a>
                </li>
            </ul>
        </nav>
    </div>
)
}

export default Navbar