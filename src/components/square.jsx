import React from 'react';

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      piece: props.piece
    }
  }

  squareColor(x, y) {
    if (x % 2 === 0) {
      return y % 2 === 0 ? 'bg-dark' : 'bg-light';
    } else {
      return y % 2 === 0 ? 'bg-light' : 'bg-dark';
    }
  }

  render() {
    if (this.state.piece) {
      return (
        <div className={`square ${this.squareColor(this.props.x, this.props.y)}`} onClick={this.props.onClick}>
          <img src={this.state.piece.image} alt={this.state.piece.name}/>
        </div>
      );
    } else {
      return (
        <div className={`square ${this.squareColor(this.props.x, this.props.y)}` }>
          <span className="sr-only">empty square</span>
        </div>
      );
    }
  }
};
