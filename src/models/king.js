export default class King {
  constructor(color, position) {
    this.color = color;
    this.image = `/king-${color}.png`;
    this.name = `${color} king`;
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
