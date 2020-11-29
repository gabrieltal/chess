export default class History {
  constructor() {
    this.moves = [];
  }

  logMove(description) {
    this.moves.push(description);
    return description;
  }

  lastMove() {
    return this.moves[this.moves.length - 1];
  }
}
