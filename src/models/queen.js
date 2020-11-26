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
    const possibilities = [];
    let step = 1;
    let indexAtPosition;
    let centerMovePossible = true;
    let leftMovePossible = true;
    let rightMovePossible = true;

    // Move up
    while(this.indexAtCenter(step, 'up') > 0) {
      if (leftMovePossible) {
        indexAtPosition = this.indexAtLeftDiagonal(step, 'up');

        if (this.enemyPieceAtSquare(squares, indexAtPosition)) {
          possibilities.push(indexAtPosition);
          leftMovePossible = false;
        } else if (this.pieceAtSquare(squares, indexAtPosition)) {
          leftMovePossible = false;
        } else if (indexAtPosition % 8 === 0) {
          possibilities.push(indexAtPosition);
          leftMovePossible = false;
        } else {
          possibilities.push(indexAtPosition);
        }
      }

      if (centerMovePossible) {
        indexAtPosition = this.indexAtCenter(step, 'up');

        if (this.enemyPieceAtSquare(squares, indexAtPosition)) {
          possibilities.push(indexAtPosition);
          centerMovePossible = false;
        } else if (this.pieceAtSquare(squares, indexAtPosition)) {
          centerMovePossible = false;
        } else {
          possibilities.push(indexAtPosition);
        }
      }

      if (rightMovePossible) {
        indexAtPosition = this.indexAtRightDiagonal(step, 'up');

        if (this.enemyPieceAtSquare(squares, indexAtPosition)) {
          possibilities.push(indexAtPosition);
          rightMovePossible = false;
        } else if (this.pieceAtSquare(squares, indexAtPosition)) {
          rightMovePossible = false;
        } else if ((indexAtPosition + 1) % 8 === 0) {
          possibilities.push(indexAtPosition);
          rightMovePossible = false;
        } else {
          possibilities.push(indexAtPosition);
        }
      }

      step += 1;
    }

    // Move down
    step = 1;
    leftMovePossible = true;
    rightMovePossible = true;
    centerMovePossible = true;
    while(this.indexAtCenter(step, 'down') < 64) {
      if (leftMovePossible) {
        indexAtPosition = this.indexAtLeftDiagonal(step, 'down');

        if (this.enemyPieceAtSquare(squares, indexAtPosition)) {
          possibilities.push(indexAtPosition);
          leftMovePossible = false;
        } else if (this.pieceAtSquare(squares, indexAtPosition)) {
          leftMovePossible = false;
        } else if (indexAtPosition % 8 === 0) {
          possibilities.push(indexAtPosition);
          leftMovePossible = false;
        } else {
          possibilities.push(indexAtPosition);
        }
      }

      if (centerMovePossible) {
        indexAtPosition = this.indexAtCenter(step, 'down');

        if (this.enemyPieceAtSquare(squares, indexAtPosition)) {
          possibilities.push(indexAtPosition);
          centerMovePossible = false;
        } else if (this.pieceAtSquare(squares, indexAtPosition)) {
          centerMovePossible = false;
        } else {
          possibilities.push(indexAtPosition);
        }
      }

      if (rightMovePossible) {
        indexAtPosition = this.indexAtRightDiagonal(step, 'down');

        if (this.enemyPieceAtSquare(squares, indexAtPosition)) {
          possibilities.push(indexAtPosition);
          rightMovePossible = false;
        } else if (this.pieceAtSquare(squares, indexAtPosition)) {
          rightMovePossible = false;
        } else if ((indexAtPosition + 1) % 8 === 0) {
          possibilities.push(indexAtPosition);
          rightMovePossible = false;
        } else {
          possibilities.push(indexAtPosition);
        }
      }

      step += 1;
    }

    // Move horizontal
    step = 1;
    let canMoveLeft = this.currentPosition % 8 === 0 ? false : true;
    let canMoveRight = (this.currentPosition + 1) % 8 === 0 ? false : true;
    while (canMoveLeft || canMoveRight) {
      if (canMoveLeft) {
        indexAtPosition = this.currentPosition - step;
        if (this.enemyPieceAtSquare(squares, indexAtPosition)) {
          possibilities.push(indexAtPosition);
        } else if (this.pieceAtSquare(squares, indexAtPosition)) {
          canMoveLeft = false;
        } else if (indexAtPosition % 8 === 0) {
          possibilities.push(indexAtPosition);
          canMoveLeft = false;
        } else {
          possibilities.push(indexAtPosition);
        }
      }

      if (canMoveRight) {
        indexAtPosition = this.currentPosition + step;
        if (this.enemyPieceAtSquare(squares, indexAtPosition)) {
          possibilities.push(indexAtPosition);
        } else if (this.pieceAtSquare(squares, indexAtPosition)) {
          canMoveRight = false;
        } else if ((indexAtPosition + 1) % 8 === 0) {
          possibilities.push(indexAtPosition);
          canMoveRight = false;
        } else {
          possibilities.push(indexAtPosition);
        }
      }

      step += 1;
    }


    return possibilities;
  }

  indexAtCenter(step, direction) {
    if (direction === 'up') {
      return this.currentPosition - (8 * step);
    } else if (direction === 'down') {
      return this.currentPosition + (8 * step);
    }
  }

  indexAtLeftDiagonal(step, direction) {
    if (direction === 'up') {
      return this.currentPosition - (8 * step) - step;
    } else if (direction === 'down') {
      return this.currentPosition + (8 * step) - step;
    }
  }

  indexAtRightDiagonal(step, direction) {
    if (direction === 'up') {
      return this.currentPosition - (8 * step) + step;
    } else if (direction === 'down') {
      return this.currentPosition + (8 * step) + step;
    }
  }

  pieceAtSquare(squares, index) {
    return squares[index];
  }

  enemyPieceAtSquare(squares, index) {
    return squares[index] && squares[index].color !== this.color;
  }

  makeMove(index) {
    this.currentPosition = index;
    this.hasMoved = true;
  }
}
