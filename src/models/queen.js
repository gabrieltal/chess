export default class Queen {
  constructor(color, position) {
    this.color = color;
    this.image = `/queen-${color}.png`;
    this.name = `${color} queen`;
    this.selected = false;
    this.hasMoved = false;
    this.currentPosition = position;
  }

  possibleMoves(squares) {
    const posibilities = [];
    let possibleMove;

    return posibilities;
  }
}
