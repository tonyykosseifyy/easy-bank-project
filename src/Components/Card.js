import React from 'react' ;
import './Card.css' ;

const Card = ({ item , svg }) => {
    return (
        <div className='card'>
            { svg }
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>
    )
} ;

export default Card ;