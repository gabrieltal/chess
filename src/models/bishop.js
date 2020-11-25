export default class Bishop {
  constructor(color, position) {
    this.color = color;
    this.image = `/bishop-${color}.png`;
    this.name = `${color} bishop`;
    this.selected = false;
    this.hasMoved = false;
    this.currentPosition = position;
  }

  possibleMoves(squares) {
    const possibilities = [];
    let possibleMove;
    let pieceAtSquare;

    // Add moves from the top left diagonal
    possibleMove = this.currentPosition;
    while(!this.atLeftBorder(possibleMove) && !this.atTopBorder(possibleMove)) {
      possibleMove -= 9;

      pieceAtSquare = squares[possibleMove];
      if (pieceAtSquare && pieceAtSquare.color !== this.color) {
        possibilities.push(possibleMove);
        break;
      } else if (pieceAtSquare) {
        break;
      } else {
        possibilities.push(possibleMove);
      }
    }

    // Add moves from the top right diagonal
    possibleMove = this.currentPosition;
    while(!this.atRightBorder(possibleMove) && !this.atTopBorder(possibleMove)) {
      possibleMove -= 7;

      pieceAtSquare = squares[possibleMove];
      if (pieceAtSquare && pieceAtSquare.color !== this.color) {
        possibilities.push(possibleMove);
        break;
      } else if (pieceAtSquare) {
        break;
      } else {
        possibilities.push(possibleMove);
      }
    }

    // Add moves from the bottom left diagonal
    possibleMove = this.currentPosition;
    while(!this.atLeftBorder(possibleMove) && !this.atBottomBorder(possibleMove)) {
      possibleMove += 7;

      pieceAtSquare = squares[possibleMove];
      if (pieceAtSquare && pieceAtSquare.color !== this.color) {
        possibilities.push(possibleMove);
        break;
      } else if (pieceAtSquare) {
        break;
      } else {
        possibilities.push(possibleMove);
      }
    }

    // Add moves from the bottom right diagonal
    possibleMove = this.currentPosition;
    while(!this.atRightBorder(possibleMove) && !this.atBottomBorder(possibleMove)) {
      possibleMove += 9;

      pieceAtSquare = squares[possibleMove];
      if (pieceAtSquare && pieceAtSquare.color !== this.color) {
        possibilities.push(possibleMove);
        break;
      } else if (pieceAtSquare) {
        break;
      } else {
        possibilities.push(possibleMove);
      }
    }

    return possibilities;
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

  teamPieceAtSquare(squares, position) {
    return squares[position] && squares[position].color === this.color;
  }

  makeMove(index) {
    this.currentPosition = index;
    this.hasMoved = true;
  }
}
