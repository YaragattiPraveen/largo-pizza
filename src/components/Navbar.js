import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/navbar.css';
import logo from '../assets/pizzaLogo.png'

function Navbar() {
    const [mobMenu,setmobMenu] = useState(false)

    const mobileMenu = ()=>{
        setmobMenu(!mobMenu)
    }

  return (
    <div className='Navbar_container'>
        <nav className='Navbar'>
            <div className='logo'>
               <Link to='/'>
               <img src={logo} alt="logo"/>
               </Link> 
            </div>
            <div className={mobMenu ? "Navbar_menu menu_active":"Navbar_menu"} >
                    <Link className='nav_item' onClick={mobileMenu} to='/'>Home</Link>
                    <Link className='nav_item' onClick={mobileMenu} to='/menu'>Menu</Link>
                    <Link className='nav_item' onClick={mobileMenu} to='/about'>About US</Link>
                    <Link className='nav_item' onClick={mobileMenu} to='/contact'>Contact US</Link>

            </div>
            <div  className='mobile_menu'>
               {mobMenu ?<CloseIcon style={{fontSize:'3rem'}} onClick={mobileMenu} />: <MenuOutlinedIcon onClick={mobileMenu} style={{fontSize:'3rem'}}/>}
            </div>
        </nav>
    </div>
  ) 
}

export default Navbar