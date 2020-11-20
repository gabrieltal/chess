import Square from './square';
import React from 'react';

export default class Board extends React.Component {
  renderSquare(index, x, y, piece = null) {
    if (piece) {
      return <Square key={index} index={index} x={x} y={y} piece={piece} onClick={() => this.props.onClick(index)} />;
    } else {
      return <Square key={index} index={index} x={x} y={y} piece={piece} />;
    }
  }

  render() {
    let displayedBoard = [];
    let index = 0;

    for (var x = 0; x < 8; x++) {
      let boardRow = [];
      for (var y = 0; y < 8; y++) {
        boardRow.push(this.renderSquare(index, x, y, this.props.squares[index]));
        index += 1;
      }
      displayedBoard.push(<div className="row" key={x}>{boardRow}</div>);
    }

    return (
      <div className="board m-2">
        {displayedBoard}
      </div>
    );
  }
};
