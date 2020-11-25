const BASE_MOVEMENT = 8;

export default class Pawn {
  constructor(color, position) {
    this.color = color;
    this.image = `/pawn-${color}.png`;
    this.name = `${color} pawn`;
    this.selected = false;
    this.hasMoved = false;
    this.currentPosition = position;
  }

  possibleMoves(squares) {
    const possibilities = [];
    let possibleMove;

    // Pawns can move up one unless there is a piece in the way
    possibleMove = this.currentPosition + this.baseMovement();
    if (!this.pieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // If the Pawn hasn't moved yet it can move up two unless there is a piece in the way
    possibleMove = this.currentPosition + this.baseMovement() + this.baseMovement();
    if (!this.hasMoved && !this.pieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // If there is an enemy at the left diagonal of the pawn then we can strike it
    possibleMove = this.currentPosition + this.baseMovement() - 1;
    if (this.pieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // If there is an enemy at the left diagonal of the pawn then we can strike it
    possibleMove = this.currentPosition + this.baseMovement() + 1;
    if (this.pieceAtSquare(squares, possibleMove)) {
      possibilities.push(possibleMove);
    }

    // TODO: Need to figure out en passant logic here

    return possibilities;
  }

  baseMovement() {
    // White pieces move up the board
    if (this.color === 'white') {
      return -BASE_MOVEMENT;
    // Black pieces move down the board
    } else {
      return BASE_MOVEMENT;
    }
  }

  pieceAtSquare(squares, position) {
    return squares[position];
  }

  makeMove(index) {
    this.currentPosition = index;
    this.hasMoved = true;
  }
}
