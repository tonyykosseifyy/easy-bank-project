import React from 'react'; 
import './Body.css' ;


const Body = ({ open }) => {
  return (
    <main className='body'>
      <div className={`overlay ${open && 'start-overlay'}`}></div>
    </main>
  )
} ;



export default Body;