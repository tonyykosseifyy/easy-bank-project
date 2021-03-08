import React from 'react'; 
import './Body.css' ;
import Button from './Button' ;
import imageMockup from '../Assets/image-mockups.png'
import { cardData , blogData } from '../Assets/data' ;
import Card from './Card' ;
import { budgeting , api , onboarding , online } from '../Assets/cardImages'
import Blog from './Blog'
import currencyImage from '../Assets/image-currency.jpg' ;
import resImage from '../Assets/image-restaurant.jpg' ;
import planeImage from '../Assets/image-plane.jpg' ;
import confImage from '../Assets/image-confetti.jpg' ;


const Body = ({ open }) => {
	const data = cardData ;
	const svgs = [ online , budgeting , onboarding , api ] ;
	const blogs = blogData ;
	const images = [currencyImage , resImage , planeImage , confImage ]
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
		<div className='body-bottom'>
			<h1>Latest Articles</h1>
			<div className='body-mid-cards'>
				{ blogs.map((item , index) => (
					<Blog key={index} item={item} image={images[index]} />
				))}
			</div>
		</div>
    </main> 
  )
} ;


export default Body;