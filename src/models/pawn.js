export default class Pawn {
  constructor(color) {
    this.color = color;
    this.image = `/pawn-${color}.png`;
    this.name = `${color} pawn`;
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
