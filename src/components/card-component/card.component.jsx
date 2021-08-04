import React from 'react';
import './card.style.css';

export const CardComponent = (props) => {
    return <div>
        <h1>{props.monster.name}</h1>
    </div>
}