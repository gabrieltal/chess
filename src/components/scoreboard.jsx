import Square from './square';
import React from 'react';

export default class Scoreboard extends React.Component {
  chessNotation(piece, finish) {
    let x, y;
    const PIECE_DICTIONARY = {
      Pawn: '',
      King: 'K',
      Queen: 'Q',
      Bishop: 'B',
      Knight: 'N',
      Rook: 'R'
    };

    if (finish % 8 === 0) {
      x = 'a';
    } else if ((finish - 1) % 8 === 0) {
      x = 'b';
    } else if ((finish - 2) % 8 === 0) {
      x = 'c';
    } else if ((finish - 3) % 8 === 0) {
      x = 'd';
    } else if ((finish - 4) % 8 === 0) {
      x = 'e';
    } else if ((finish - 5) % 8 === 0) {
      x = 'f';
    } else if ((finish - 6) % 8 === 0) {
      x = 'g';
    } else {
      x = 'h';
    }

    if (finish < 8) {
      y = '8';
    } else if (finish < 16) {
      y = '7';
    } else if (finish < 24) {
      y = '6';
    } else if (finish < 32) {
      y = '5';
    } else if (finish < 40) {
      y = '4';
    } else if (finish < 48) {
      y = '3';
    } else if (finish < 56) {
      y = '2';
    } else {
      y = '1';
    }

    return <span>{PIECE_DICTIONARY[piece.constructor.name]}{x}{y}</span>;
  }

  displayMoveList(moves) {
    const moveList = [];
    let whiteMove, blackMove;

    for (let i = 0; i < moves.length; i++) {
      whiteMove = moves[i];

      if (i === (moves.length - 1)) {
        moveList.push(
          <li key={i}>
            <div className="move-description">
              {this.chessNotation(whiteMove.piece, whiteMove.move_to)}
            </div>
          </li>
        );
      } else {
        i += 1;
        blackMove = moves[i];

        moveList.push(
          <li key={i}>
            <div className="move-description">
              {this.chessNotation(whiteMove.piece, whiteMove.move_to)}
              {this.chessNotation(blackMove.piece, blackMove.move_to)}
            </div>
          </li>
        );
      }
    }

    return moveList;
  }

  render() {
    return (
      <section className="scoreboard h-100 mx-2 d-flex flex-column justify-content-between">
        <div className="player-card d-flex align-items-start justify-content-between py-2">
          <h2 className="m-0 capitalize">{this.props.players['black'].color}</h2>
          <span className={`bg-grey p-1 white badge ${this.props.current === this.props.players['black'] ? 'active' : 'd-none' }`}>Your turn</span>

        </div>
        <div className="move-history bg-dark">
          <ol>
            {this.displayMoveList(this.props.moves)}
          </ol>
        </div>
        <div className="player-card d-flex align-items-start justify-content-between py-2">
          <h2 className="m-0 capitalize">{this.props.players['white'].color}</h2>
        <span className={`bg-grey p-1 white badge ${this.props.current === this.props.players['white'] ? 'active' : 'd-none' }`}>Your turn</span>
        </div>
      </section>
    );
  }
};
