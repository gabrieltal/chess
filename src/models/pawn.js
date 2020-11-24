export default class Pawn {
  constructor(color, position) {
    this.color = color;
    this.image = `/pawn-${color}.png`;
    this.name = `${color} pawn`;
    this.selected = false;
    this.hasMoved = false;
    this.currentPosition = position;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    posibilities.push(this.currentPosition + this.movementByColor());

    if (!this.hasMoved) {
      posibilities.push(this.currentPosition + this.movementByColor() + this.movementByColor());
    }

    return posibilities;
  }

  movementByColor() {
    // White pieces move up the board
    if (this.color === 'white') {
      return -8;
    // Black pieces move down the board
    } else {
      return 8;
    }
  }

  makeMove(index) {
    this.currentPosition = index;
    this.hasMoved = true;
  }

  // inRangeToStrike(board) {
  //   let squaresInRangeOfStrike = [];
  //
  //   squaresInRangeOfStrike.push(this.currentPosition + this.movementByColor() + 1);
  //   squaresInRangeOfStrike.push(this.currentPosition + this.movementByColor() - 1);
  //
  //   board.checkSquareForEnemies(this.color, squaresInRangeOfStrike);
  // }
}
