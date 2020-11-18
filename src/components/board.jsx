import Square from './square';
import React from 'react';
import Knight from './pieces/knight';
import Bishop from './pieces/bishop';
import King from './pieces/king';
import Queen from './pieces/queen';
import Rook from './pieces/rook';
import Pawn from './pieces/pawn';

export default class Board extends React.Component {
  renderSquare(x, y, piece = null) {
    return <Square x={x} y={y} piece={piece} onClick={() => this.props.onClick(x, y, piece)} />;
  }

  render() {
    return (
      <div className="board m-2">
        <div className="row">
          {this.renderSquare(0, 7, new Rook('black'))}
          {this.renderSquare(1, 7, new Knight('black'))}
          {this.renderSquare(2, 7, new Bishop('black'))}
          {this.renderSquare(3, 7, new Queen('black'))}
          {this.renderSquare(4, 7, new King('black'))}
          {this.renderSquare(5, 7, new Bishop('black'))}
          {this.renderSquare(6, 7, new Knight('black'))}
          {this.renderSquare(7, 7, new Rook('black'))}
        </div>

        <div className="row">
          {this.renderSquare(0, 6, new Pawn('black'))}
          {this.renderSquare(1, 6, new Pawn('black'))}
          {this.renderSquare(2, 6, new Pawn('black'))}
          {this.renderSquare(3, 6, new Pawn('black'))}
          {this.renderSquare(4, 6, new Pawn('black'))}
          {this.renderSquare(5, 6, new Pawn('black'))}
          {this.renderSquare(6, 6, new Pawn('black'))}
          {this.renderSquare(7, 6, new Pawn('black'))}
        </div>

        <div className="row">
          {this.renderSquare(0, 5)}
          {this.renderSquare(1, 5)}
          {this.renderSquare(2, 5)}
          {this.renderSquare(3, 5)}
          {this.renderSquare(4, 5)}
          {this.renderSquare(5, 5)}
          {this.renderSquare(6, 5)}
          {this.renderSquare(7, 5)}
        </div>

        <div className="row">
          {this.renderSquare(0, 4)}
          {this.renderSquare(1, 4)}
          {this.renderSquare(2, 4)}
          {this.renderSquare(3, 4)}
          {this.renderSquare(4, 4)}
          {this.renderSquare(5, 4)}
          {this.renderSquare(6, 4)}
          {this.renderSquare(7, 4)}
        </div>

        <div className="row">
          {this.renderSquare(0, 3)}
          {this.renderSquare(1, 3)}
          {this.renderSquare(2, 3)}
          {this.renderSquare(3, 3)}
          {this.renderSquare(4, 3)}
          {this.renderSquare(5, 3)}
          {this.renderSquare(6, 3)}
          {this.renderSquare(7, 3)}
        </div>

        <div className="row">
          {this.renderSquare(0, 2)}
          {this.renderSquare(1, 2)}
          {this.renderSquare(2, 2)}
          {this.renderSquare(3, 2)}
          {this.renderSquare(4, 2)}
          {this.renderSquare(5, 2)}
          {this.renderSquare(6, 2)}
          {this.renderSquare(7, 2)}
        </div>

        <div className="row">
          {this.renderSquare(0, 1, new Pawn('white'))}
          {this.renderSquare(1, 1, new Pawn('white'))}
          {this.renderSquare(2, 1, new Pawn('white'))}
          {this.renderSquare(3, 1, new Pawn('white'))}
          {this.renderSquare(4, 1, new Pawn('white'))}
          {this.renderSquare(5, 1, new Pawn('white'))}
          {this.renderSquare(6, 1, new Pawn('white'))}
          {this.renderSquare(7, 1, new Pawn('white'))}
        </div>

        <div className="row">
          {this.renderSquare(0, 0, new Rook('white'))}
          {this.renderSquare(1, 0, new Knight('white'))}
          {this.renderSquare(2, 0, new Bishop('white'))}
          {this.renderSquare(3, 0, new Queen('white'))}
          {this.renderSquare(4, 0, new King('white'))}
          {this.renderSquare(5, 0, new Bishop('white'))}
          {this.renderSquare(6, 0, new Knight('white'))}
          {this.renderSquare(7, 0, new Rook('white'))}
        </div>
      </div>
    );
  }
};
