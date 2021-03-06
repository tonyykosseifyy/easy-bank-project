import React from 'react'; 
import './Body.css' ;


const Body = ({ open }) => {
  return (
    <main className='body'>
      <div className={`overlay ${open && 'start-overlay'}`}></div>
      <div className='body-up'> </div>
    </main> 
  )
} ;



export default Body;