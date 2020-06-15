import React from 'react';
import chess from '../img/chess.jpg';
const card = () => {
    return (
        <div className="card-wrapper">
            <span className="card-title">Card Title</span>
            <img 
                className="card-img"
                alt="card info"
                src={chess} 
            />
        </div>
    )
}

export default card;