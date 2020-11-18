import React from 'react';
import Board from './board';

export default class Game extends React.Component {
  handleClick(x, y, piece) {
    console.log('yo');
    console.log(x);
    console.log(y);
    console.log(piece);
  }

  render() {
    return (
      <Board onClick={(x, y, piece) => this.handleClick(x, y, piece) }/>
    );
  }
}
