import Square from './square';
import React from 'react';

export default class Board extends React.Component {
  renderSquare(square) {
    let cssClasses = square.bgColor;

    if (this.props.lastMove?.move_from === square.index || this.props.lastMove?.move_to === square.index) {
      cssClasses = 'bg-orange';
    } else if (this.props.selectedSquare?.piece === square.piece) {
      cssClasses += ' border-blue';
    }

    if (this.props.checkmate) {
      return <Square key={square.index} piece={square.piece} cssClasses={cssClasses} />;
    } else {
      return <Square key={square.index} piece={square.piece} cssClasses={cssClasses} onClick={() => this.props.onClick(square)} />;
    }
  }

  render() {
    let displayedBoard = [];
    let index = 0;

    for (var x = 0; x < 8; x++) {
      let boardRow = [];
      for (var y = 0; y < 8; y++) {
        boardRow.push(this.renderSquare(this.props.squares[index]));
        index += 1;
      }
      displayedBoard.push(<div className="row" key={x}>{boardRow}</div>);
    }

    let restart;

    if (this.props.checkmate) {
      restart = <a href="/">Play again?</a>;
    }

    return (
      <div className="board my-2">
        {displayedBoard}
        <p>{this.props.message}</p>
        {restart}
      </div>
    );
  }
};
