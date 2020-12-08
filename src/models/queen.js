import Piece from './piece';

export default class Queen extends Piece {
  constructor(color, position) {
    super(color, 'queen');
  }

  possibleMoves(squares, currentPosition, options) {
    const possibilities = [];
    let step = 1;
    let indexAtPosition;
    let centerMovePossible = true;
    let leftMovePossible = true;
    let rightMovePossible = true;

    // Move up
    while(this.indexAtCenter(currentPosition, step, 'up') > 0) {
      if (leftMovePossible) {
        indexAtPosition = this.indexAtLeftDiagonal(currentPosition, step, 'up');

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
        indexAtPosition = this.indexAtCenter(currentPosition, step, 'up');

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
        indexAtPosition = this.indexAtRightDiagonal(currentPosition, step, 'up');

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
    while(this.indexAtCenter(currentPosition, step, 'down') < 64) {
      if (leftMovePossible) {
        indexAtPosition = this.indexAtLeftDiagonal(currentPosition, step, 'down');

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
        indexAtPosition = this.indexAtCenter(currentPosition, step, 'down');

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
        indexAtPosition = this.indexAtRightDiagonal(currentPosition, step, 'down');

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
    let canMoveLeft = currentPosition % 8 === 0 ? false : true;
    let canMoveRight = (currentPosition + 1) % 8 === 0 ? false : true;
    while (canMoveLeft || canMoveRight) {
      if (canMoveLeft) {
        indexAtPosition = currentPosition - step;
        if (this.enemyPieceAtSquare(squares, indexAtPosition)) {
          possibilities.push(indexAtPosition);
          canMoveLeft = false;
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
        indexAtPosition = currentPosition + step;
        if (this.enemyPieceAtSquare(squares, indexAtPosition)) {
          possibilities.push(indexAtPosition);
          canMoveRight = false;
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

  indexAtCenter(currentPosition, step, direction) {
    if (direction === 'up') {
      return currentPosition - (8 * step);
    } else if (direction === 'down') {
      return currentPosition + (8 * step);
    }
  }

  indexAtLeftDiagonal(currentPosition, step, direction) {
    if (direction === 'up') {
      return currentPosition - (8 * step) - step;
    } else if (direction === 'down') {
      return currentPosition + (8 * step) - step;
    }
  }

  indexAtRightDiagonal(currentPosition, step, direction) {
    if (direction === 'up') {
      return currentPosition - (8 * step) + step;
    } else if (direction === 'down') {
      return currentPosition + (8 * step) + step;
    }
  }
}
