import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = ({ data }) => {
    // console.log(data);
    return (
        <div className="card-list">
            {
                data.map((monster) => (
                    <Card key={monster.id} monster={monster} />
                ))
            }
        </div>
    )
}

export default CardList
