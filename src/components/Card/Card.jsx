import React from 'react';
import './Card.css';

const Card = ({ monster }) => {
    return (
        <div className="card-container">
            {/* <img src={} alt="monster" /> */}
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export default Card
