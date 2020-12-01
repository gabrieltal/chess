import Square from './square';
import React from 'react';

export default class Board extends React.Component {
  renderSquare(index, x, y, piece = null) {
    let cssClasses = '';

    if (this.props.lastMove && (this.props.lastMove.move_from === index || this.props.lastMove.move_to === index)) {
      cssClasses = 'bg-orange';
    } else {
      // default background colors
      if (x % 2 === 0) {
        cssClasses = y % 2 === 0 ? 'bg-dark' : 'bg-light';
      } else {
        cssClasses = y % 2 === 0 ? 'bg-light' : 'bg-dark';
      }

      if (this.props.selectedPiece && this.props.selectedPiece === piece) {
        cssClasses += ' border-blue';
      }
    }

    return <Square key={index} piece={piece} cssClasses={cssClasses} onClick={() => this.props.onClick(index)} />;
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
      <div className="board my-2">
        {displayedBoard}
      </div>
    );
  }
};
