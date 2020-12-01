import Square from './square';
import React from 'react';
import PlayerCard from './playercard';

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
      <section className="scoreboard">
        <PlayerCard player={this.props.players['black']} current={this.props.current} />
        <div className="p-2">
          <ol className="move-history p-1 bg-white h-100 m-0">
            {this.displayMoveList(this.props.moves)}
          </ol>
        </div>
        <PlayerCard player={this.props.players['white']} current={this.props.current} />
      </section>
    );
  }
};
