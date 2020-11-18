export default class Bishop {
  constructor(color) {
    this.image = `/bishop-${color}.png`;
    this.name =  `${color} bishop`;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    return posibilities;
  }
}
