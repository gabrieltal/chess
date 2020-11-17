import React from 'react';

export default class Square extends React.Component {
  chooseColor(x, y) {
    if (x % 2 === 0) {
      return y % 2 === 0 ? 'bg-black' : 'bg-white';
    } else {
      return y % 2 === 0 ? 'bg-white' : 'bg-black';
    }
  }

  render() {
    return (
      <div className={`square ${this.chooseColor(this.props.x, this.props.y)}` } onClick={ () => alert('click') }>
      </div>
    );
  }
};
