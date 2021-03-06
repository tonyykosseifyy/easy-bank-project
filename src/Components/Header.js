import React, { useState } from 'react' ;
import './Header.css'  ;
import { logo } from '../Assets/logo' ;
import Button from './Button' ;
import Menu from './Menu' ;
const Header = ({ updateOpen }) => {
  const [ open  , setOpen ] = useState(false) ;
  window.addEventListener('resize' , () => {
  if (window.innerWidth > 800 ) {
    setOpen(false)
    console.log(window.innerWidth)
  }
  })
  return (
    <div className='header' >
        {logo} 
        <div className='header-links'>
            <a href='#' >Home</a>
            <a href='#' >About</a>
            <a href='#' >Contact</a>
            <a href='#' >Blog</a>
            <a href='#' >Careers</a>
        </div>
        <Button />
        <Menu updateOpen={updateOpen} update={setOpen} />
        <div className={`header-links-mobile ${open && 'open'}`} >
            <a href='#' >Home</a>
            <a href='#' >About</a>
            <a href='#' >Contact</a>
            <a href='#' >Blog</a>
            <a href='#' >Careers</a>
        </div>
    </div>
  )
} ;


export default Header ; 