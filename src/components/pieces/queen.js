export default class Queen {
  constructor(color) {
    this.image = `/queen-${color}.png`;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    return posibilities;
  }
}
