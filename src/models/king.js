export default class King {
  constructor(color, position) {
    this.color = color;
    this.image = `/king-${color}.png`;
    this.name = `${color} king`;
    this.hasMoved = false;
    this.currentPosition = position;
  }

  possibleMoves(squares) {
    const possibilities = [];
    let possibleMove;

    // Check up move
    possibleMove = this.currentPosition - 8;
    if (possibleMove > 0 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check directly up left diagonal move
    possibleMove = this.currentPosition - 9;
    if (possibleMove > 0 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check directly up right diagonal move
    possibleMove = this.currentPosition - 7;
    if (possibleMove > 0 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check left move
    possibleMove = this.currentPosition - 1;
    if (this.currentPosition % 8 !== 0 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check right move
    possibleMove = this.currentPosition + 1;
    if (possibleMove % 8 !== 0 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check down move
    possibleMove = this.currentPosition + 8;
    if (possibleMove < 64 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check directly down left diagonal move
    possibleMove = this.currentPosition + 7;
    if (possibleMove < 64 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // Check directly down right diagonal move
    possibleMove = this.currentPosition + 9;
    if (possibleMove < 64 && this.emptySquareOrEnemyPieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // TODO: Add castling logic

    return possibilities;
  }

  emptySquareOrEnemyPieceAtSquare(squares, index) {
    return !squares[index] || squares[index].color !== this.color;
  }

  makeMove(index) {
    this.currentPosition = index;
    this.hasMoved = true;
  }
}
