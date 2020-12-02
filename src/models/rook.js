export default class Rook {
  constructor(color, position) {
    this.color = color;
    this.image = `/rook-${color}.png`;
    this.name = `${color} rook`;
    this.hasMoved = false;
    this.currentPosition = position;
  }

  possibleMoves(squares) {
    const possibilities = [];
    let possibleMove;

    // Move up
    possibleMove = this.currentPosition - 8;
    while(possibleMove > 0) {
      if (this.enemyPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      } else if (this.pieceAtSquare(squares, possibleMove)) {
        break;
      } else {
        possibilities.push(possibleMove);
      }
      possibleMove -= 8;
    }

    // Move down
    possibleMove = this.currentPosition + 8;
    while(possibleMove < 64) {
      if (this.enemyPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      } else if (this.pieceAtSquare(squares, possibleMove)) {
        break;
      } else {
        possibilities.push(possibleMove);
      }
      possibleMove += 8;
    }

    // Move left
    possibleMove = this.currentPosition;
    while(possibleMove % 8 !== 0) {
      possibleMove -= 1;
      if (this.enemyPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      } else if (this.pieceAtSquare(squares, possibleMove)) {
        break;
      } else {
        possibilities.push(possibleMove);
      }
    }

    // Move right
    possibleMove = this.currentPosition;
    while((possibleMove + 1) % 8 !== 0) {
      possibleMove += 1;
      if (this.enemyPieceAtSquare(squares, possibleMove)) {
        possibilities.push(possibleMove);
      } else if (this.pieceAtSquare(squares, possibleMove)) {
        break;
      } else {
        possibilities.push(possibleMove);
      }
    }

    return possibilities;
  }

  pieceAtSquare(squares, index) {
    return squares[index].piece;
  }

  enemyPieceAtSquare(squares, index) {
    return squares[index].piece && squares[index].piece.color !== this.color;
  }

  makeMove(index) {
    this.currentPosition = index;
    this.hasMoved = true;
  }
}
