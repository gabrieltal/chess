export default class Rook {
  constructor(color) {
    this.color = color;
    this.image = `/rook-${color}.png`;
    this.name = `${color} rook`;
    this.selected = false;
    this.hasMoved = false;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    return posibilities;
  }
}
