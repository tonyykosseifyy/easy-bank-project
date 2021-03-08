import React from 'react'; 
import './Body.css' ;
import Button from './Button' ;
import imageMockup from '../Assets/image-mockups.png'


const Body = ({ open }) => {
  return (
    <main className='body'>
    	<div className={`overlay ${open && 'start-overlay'}`}></div>
      	<div className='body-up'> 
        	<div className='body-up-left'>
				<h1>Next generation digital banking</h1>
				<p>Take your financial life online. Your Easy Bank account will be a one-stop-shop for spending , saving , budgeting , investing and much more</p>
				<Button />
        	</div>
			
			<div className='body-up-right'>
				<img src={imageMockup} alt='decoration' />
			</div>
    	</div>
    </main> 
  )
} ;


export default Body;