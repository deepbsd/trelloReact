import React from 'react';

import Card from './card';

import './list.css';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{
                text: 'Example card: ',
                name: 'Dave'
            }, {
                text: 'Example card: ',
                name: 'Matt'
            }, {
                text: 'Example card: ',
                name: 'Whodat'
            }],
            comments: [{
              author: 'Alice: ',
              quote: 'I think I\'ve got this!'
            },
            {
              author: 'Dave: ',
              quote: 'Me too!'
            }]
        }
    }

    render() {
        const cards = this.state.cards.map((card, index) =>
            <Card key={index} {...card} />
        );
        const comments = this.state.comments.map((comment, index) =>
            <Card key={index} {...comment} />
      );
        return (
            <div className="list">
                <h3>{this.props.title}</h3>
                {cards}
                {comments}
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};
