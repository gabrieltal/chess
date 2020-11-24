import React from 'react';

export default class Square extends React.Component {
  squareColor(x, y, piece) {
    let colors;

    if (x % 2 === 0) {
      colors = y % 2 === 0 ? 'bg-dark' : 'bg-light';
    } else {
      colors = y % 2 === 0 ? 'bg-light' : 'bg-dark';
    }

    if (piece && piece.selected) {
      colors += ' border-yellow';
    }

    return colors;
  }

  render() {
    if (this.props.piece) {
      return (
        <div className={`square ${this.squareColor(this.props.x, this.props.y, this.props.piece)}`} onClick={this.props.onClick}>
          <img src={this.props.piece.image} alt={this.props.piece.name}/>
        </div>
      );
    } else {
      return (
        <div className={`square ${this.squareColor(this.props.x, this.props.y)}`} onClick={this.props.onClick}>
          <span className="sr-only">empty square</span>
        </div>
      );
    }
  }
};
