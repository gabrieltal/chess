export default class Rook {
  constructor(color) {
    this.image = `/rook-${color}.png`;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    return posibilities;
  }
}
