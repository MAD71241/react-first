import React from 'react';
import './card.style.css';

export const CardComponent = (props) => {
    return <div className="card-container">
        <img src={`https://robohash.org/${props.monster.name}.png?set=set4&size=150x150`} alt="cute kitten" />
        <h2>{props.monster.name}</h2>
    </div>
}