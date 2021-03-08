import React from 'react'
import './Blog.css' ;


function Blog({ item , image }) {
    return (
        <div className='blog'>
            <img src={image} alt='decoration' />
            <div>
                <span>By {item.author}</span>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default Blog ;
