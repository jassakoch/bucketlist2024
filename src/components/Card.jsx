import React from 'react';

export default function Card(props) {
    return (
        <div className='card'>
            <img 
            className='image'
            src={props.image}
                alt={props.imgAlt} 
                />
            <h2 className='title'>{props.title}</h2>
            <p className='description'>{props.description}</p>
        </div>
    )
}