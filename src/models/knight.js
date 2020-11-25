export default class Knight {
  constructor(color, position) {
    this.color = color;
    this.image = `/knight-${color}.png`;
    this.name = `${color} knight`;
    this.selected = false;
    this.hasMoved = false;
    this.currentPosition = position;
  }

  possibleMoves(squares) {
    const possibilities = [];
    let possibleMove;
    let pieceAtSquare;

    // Check 2 up 1 left move
    possibleMove = this.currentPosition - 17;
    pieceAtSquare = squares[possibleMove];
    if (!pieceAtSquare || pieceAtSquare.color !== this.color) {
      possibilities.push(possibleMove);
    }

    // Check 1 up 2 left move
    possibleMove = this.currentPosition - 10;
    pieceAtSquare = squares[possibleMove];
    if (!pieceAtSquare || pieceAtSquare.color !== this.color) {
      possibilities.push(possibleMove);
    }

    // Check 2 up 1 right move
    possibleMove = this.currentPosition - 15;
    pieceAtSquare = squares[possibleMove];
    if (!pieceAtSquare || pieceAtSquare.color !== this.color) {
      possibilities.push(possibleMove);
    }

    // Check 1 up 2 right move
    possibleMove = this.currentPosition - 6;
    pieceAtSquare = squares[possibleMove];
    if (!pieceAtSquare || pieceAtSquare.color !== this.color) {
      possibilities.push(possibleMove);
    }

    // Check 2 down 1 left move
    possibleMove = this.currentPosition + 15;
    pieceAtSquare = squares[possibleMove];
    if (!pieceAtSquare || pieceAtSquare.color !== this.color) {
      possibilities.push(possibleMove);
    }

    // Check 1 down 2 left move
    possibleMove = this.currentPosition + 6;
    pieceAtSquare = squares[possibleMove];
    if (!pieceAtSquare || pieceAtSquare.color !== this.color) {
      possibilities.push(possibleMove);
    }

    // Check 2 down 1 right move
    possibleMove = this.currentPosition + 17;
    pieceAtSquare = squares[possibleMove];
    if (!pieceAtSquare || pieceAtSquare.color !== this.color) {
      possibilities.push(possibleMove);
    }

    // Check 1 down 2 right move
    possibleMove = this.currentPosition + 10;
    pieceAtSquare = squares[possibleMove];
    if (!pieceAtSquare || pieceAtSquare.color !== this.color) {
      possibilities.push(possibleMove);
    }

    return possibilities;
  }

  makeMove(index) {
    this.currentPosition = index;
    this.hasMoved = true;
  }

  atLeftBorder(position) {
    return position % 8 === 0;
  }

  atRightBorder(position) {
    return (position + 1) % 8 === 0;
  }

  atTopBorder(position) {
    return position < 0;
  }

  atBottomBorder(position) {
    return position > 63;
  }
}
