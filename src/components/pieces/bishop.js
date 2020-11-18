export default class Bishop {
  constructor(color) {
    this.image = `/bishop-${color}.png`;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    return posibilities;
  }
}
