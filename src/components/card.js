import React from 'react';

import './card.css';

export default function Card(props) {
    return (
        <div className="card">
            {props.text}
            {props.name}
            {props.author}
            {props.quote}

        </div>
    );
};

Card.defaultProps = {
    text: ''
};
