import React from 'react';

export default class Square extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     value: null,
  //     position: [p]
  //   };
  // }

  chooseColor(x, y) {
    if (x % 2 === 0) {
      return y % 2 === 0 ? 'bg-white' : 'bg-black';
    } else {
      return y % 2 === 0 ? 'bg-black' : 'bg-white';
    }
  }

  render() {
    return (
      <div className={`square ${this.chooseColor(this.props.x, this.props.y)}` } onClick={ () => alert('click') }>
        {this.props.x}, {this.props.y}
      </div>
    );
  }
};
