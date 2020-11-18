import React from 'react';

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      piece: props.piece
    }
  }

  chooseColor(x, y) {
    if (x % 2 === 0) {
      return y % 2 === 0 ? 'bg-dark' : 'bg-light';
    } else {
      return y % 2 === 0 ? 'bg-light' : 'bg-dark';
    }
  }

  render() {
    return (
      <div className={`square ${this.chooseColor(this.props.x, this.props.y)}` }>
        <img src={this.state.piece ? this.state.piece.image : null} />
      </div>
    );
  }
};
