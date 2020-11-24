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

    return posibilities;
  }
}
