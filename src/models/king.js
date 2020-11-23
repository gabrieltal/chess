export default class King {
  constructor(color) {
    this.color = color;
    this.image = `/king-${color}.png`;
    this.name = `${color} king`;
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
