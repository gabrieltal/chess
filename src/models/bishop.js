export default class Bishop {
  constructor(color, position) {
    this.color = color;
    this.image = `/bishop-${color}.png`;
    this.name = `${color} bishop`;
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
