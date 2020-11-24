export default class Rook {
  constructor(color, position) {
    this.color = color;
    this.image = `/rook-${color}.png`;
    this.name = `${color} rook`;
    this.selected = false;
    this.hasMoved = false;
    this.currentPosition = position;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    return posibilities;
  }
}
