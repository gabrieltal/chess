export default class Knight {
  constructor(color) {
    this.image = `/knight-${color}.png`;
    this.name =  `${color} knight`;
  }

  isValidMove(move) {
    this.possibleMoves().includes(move);
  }

  possibleMoves() {
    var posibilities = [];

    // Check 2 up 1 left move
    if (this.square.x > 0 && this.square.y < 6) {
      posibilities.push([this.square.x - 1, this.square.y + 2]);
    }

    // Check 1 up 2 left move
    if (this.square.x > 1 && this.square.y < 7) {
      posibilities.push([this.square.x - 2, this.square.y + 1]);
    }

    // Check 2 up 1 right move
    if (this.square.x < 7 && this.square.y < 6) {
      posibilities.push([this.square.x + 1, this.square.y + 2]);
    }

    // Check 1 up 2 right move
    if (this.square.x < 6 && this.square.y < 7) {
      posibilities.push([this.square.x + 2, this.square.y + 1]);
    }

    // Check 2 down 1 left move
    if (this.square.x > 0 && this.square.y > 1) {
      posibilities.push([this.square.x - 1, this.square.y - 2]);
    }

    // Check 1 down 2 left move
    if (this.square.x > 1 && this.square.y > 0) {
      posibilities.push([this.square.x - 2, this.square.y - 1]);
    }

    // Check 2 down 1 right move
    if (this.square.x > 7 && this.square.y > 1) {
      posibilities.push([this.square.x + 1, this.square.y - 2]);
    }

    // Check 1 down 2 right move
    if (this.square.x < 6 && this.square.y > 0) {
      posibilities.push([this.square.x + 2, this.square.y - 1]);
    }

    return posibilities;
  }
}
