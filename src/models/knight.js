export default class Knight {
  constructor(color, position) {
    this.color = color;
    this.image = `/knight-${color}.png`;
    this.name = `${color} knight`;
    this.hasMoved = false;
    this.currentPosition = position;
  }

  possibleMoves(squares) {
    const possibilities = [];
    let possibleMove;

    if (this.canMoveUp(2)) {
      // Check 2 up, 1 left move
      possibleMove = this.currentPosition - 17;
      if (this.canMoveLeft(1) && !this.teamPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      }

      // Check 2 up, 1 right move
      possibleMove = this.currentPosition - 15;
      if (this.canMoveRight(1) && !this.teamPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      }
    }

    if (this.canMoveUp(1)) {
      // Check 1 up, 2 left move
      possibleMove = this.currentPosition - 10;
      if (this.canMoveLeft(2) && !this.teamPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      }

      // Check 1 up, 2 right move
      possibleMove = this.currentPosition - 6;
      if (this.canMoveRight(2) && !this.teamPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      }
    }

    if (this.canMoveDown(2)) {
      // Check 2 down, 1 left move
      possibleMove = this.currentPosition + 15;
      if (this.canMoveLeft(1) && !this.teamPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      }

      // Check 2 down, 1 right move
      possibleMove = this.currentPosition + 17;
      if (this.canMoveRight(1) && !this.teamPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      }
    }

    if (this.canMoveDown(1)) {
      // Check 1 down, 2 left move
      possibleMove = this.currentPosition + 6;
      if (this.canMoveLeft(2) && !this.teamPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      }


      // Check 1 down, 2 right move
      possibleMove = this.currentPosition + 10;
      if (this.canMoveRight(2) && !this.teamPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      }
    }

    return possibilities;
  }

  makeMove(index) {
    this.currentPosition = index;
    this.hasMoved = true;
  }

  canMoveUp(spaces = 1) {
    if (spaces === 2) {
      return this.currentPosition > 15;
    } else {
      return this.currentPosition > 7;
    }
  }

  canMoveLeft(spaces = 1) {
    if (spaces === 2) {
      return (this.currentPosition - 1) % 8 !== 0 || this.currentPosition % 8 !== 0;
    } else {
      return this.currentPosition % 8 !== 0;
    }
  }

  canMoveRight(spaces = 1) {
    if (spaces === 2) {
      return (this.currentPosition + 2) % 8 !== 0 && (this.currentPosition + 1) % 8 !== 0;
    } else {
      return (this.currentPosition + 1) % 8 !== 0;
    }
  }

  canMoveDown(spaces = 2) {
    if (spaces === 2) {
      return this.currentPosition < 48;
    } else {
      return this.currentPosition < 56;
    }
  }

  teamPieceAtSquare(squares, position) {
    return squares[position].piece && squares[position].piece.color === this.color;
  }
}
