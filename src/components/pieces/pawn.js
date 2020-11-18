export default class Pawn {
  constructor(color) {
    this.image = `/pawn-${color}.png`;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    return posibilities;
  }
}
