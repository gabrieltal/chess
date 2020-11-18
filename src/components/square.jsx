import React from 'react';

export default class Square extends React.Component {
  chooseColor(x, y) {
    if (x % 2 === 0) {
      return y % 2 === 0 ? 'bg-dark' : 'bg-light';
    } else {
      return y % 2 === 0 ? 'bg-light' : 'bg-dark';
    }
  }

  render() {
    return (
      <div className={`square ${this.chooseColor(this.props.x, this.props.y)}` } onClick={ () => alert('click') }>
      </div>
    );
  }
};
