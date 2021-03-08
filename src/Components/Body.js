import React from 'react'; 
import './Body.css' ;
import Button from './Button' ;
import imageMockup from '../Assets/image-mockups.png'
import { cardData } from '../Assets/data' ;
import Card from './Card' ;
import { budgeting , api , onboarding , online } from '../Assets/cardImages'


const Body = ({ open }) => {
	const data = cardData ;
	const svgs = [ online , budgeting , onboarding , api ] ;
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
		<div className='body-mid'>
			<h1>Why choose EasyBank? </h1>
			<p>We leverage open banking to turn your bank account into your financial hub. Control your finances like never before </p>
			<div className='body-mid-cards'>
				{ data.map((item , index) => (
					<Card key={index} item={item} svg={svgs[index]} />
				))}
			</div>
		</div>
    </main> 
  )
} ;


export default Body;