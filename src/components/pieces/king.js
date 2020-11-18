export default class King {
  constructor(color) {
    this.image = `/king-${color}.png`;
    this.name =  `${color} king`;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    return posibilities;
  }
}
