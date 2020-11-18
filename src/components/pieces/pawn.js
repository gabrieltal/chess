export default class Pawn {
  constructor(color) {
    this.image = `/pawn-${color}.png`;
    this.name =  `${color} pawn`;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    return posibilities;
  }
}
