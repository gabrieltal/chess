import Piece from './piece';

export default class King extends Piece {
  constructor(color) {
    super(color, 'king');
  }

  possibleMoves(squares, currentPosition) {
    const possibilities = [];
    let possibleMove;

    // Check up move
    possibleMove = currentPosition - 8;
    if (possibleMove > 0 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check directly up left diagonal move
    possibleMove = currentPosition - 9;
    if (possibleMove > 0 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check directly up right diagonal move
    possibleMove = currentPosition - 7;
    if (possibleMove > 0 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check left move
    possibleMove = currentPosition - 1;
    if (currentPosition % 8 !== 0 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check right move
    possibleMove = currentPosition + 1;
    if (possibleMove % 8 !== 0 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check down move
    possibleMove = currentPosition + 8;
    if (possibleMove < 64 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check directly down left diagonal move
    possibleMove = currentPosition + 7;
    if (possibleMove < 64 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check directly down right diagonal move
    possibleMove = currentPosition + 9;
    if (possibleMove < 64 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // TODO: Add castling logic

    return possibilities;
  }

  emptySquareOrEnemyPieceAtSquare(squares, index) {
    return !squares[index].piece || squares[index].piece.color !== this.color;
  }
}
