export default class Bishop {
  constructor(color) {
    this.color = color;
    this.image = `/bishop-${color}.png`;
    this.name = `${color} bishop`;
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
