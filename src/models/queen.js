export default class Queen {
  constructor(color) {
    this.color = color;
    this.image = `/queen-${color}.png`;
    this.name = `${color} queen`;
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
