export default class Queen {
  constructor(color) {
    this.image = `/queen-${color}.png`;
    this.name =  `${color} queen`;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    return posibilities;
  }
}
