import Piece from '../../models/piece';
import Square from '../../models/square';
import BoardHelper from '../support/board_helpers';

test('#atLeftBorder', () => {
  // Arrange
  const piece = new Piece('black', 'bishop');

  for (let i = 0; i < 64; i++) {
    expect(piece.atLeftBorder(i)).toBe(isPieceAtLeftBorder(i));
  }
});

function isPieceAtLeftBorder(i) {
  if (i % 8 === 0) {
    return true;
  } else {
    return false;
  }
}

test('#atRightBorder', () => {
  // Arrange
  const piece = new Piece('black', 'bishop');

  for (let i = 0; i < 64; i++) {
    expect(piece.atRightBorder(i)).toBe(isPieceAtRightBorder(i));
  }
});

function isPieceAtRightBorder(i) {
  if ((i + 1) % 8 === 0) {
    return true;
  } else {
    return false;
  }
}

test('#atTopBorder', () => {
  // Arrange
  const piece = new Piece('black', 'bishop');

  for (let i = 0; i < 64; i++) {
    expect(piece.atTopBorder(i)).toBe(isPieceAtTopBorder(i));
  }
});

function isPieceAtTopBorder(i) {
  if (i < 8) {
    return true;
  } else {
    return false;
  }
}

test('#atBottomBorder', () => {
  // Arrange
  const piece = new Piece('black', 'bishop');

  for (let i = 0; i < 64; i++) {
    expect(piece.atBottomBorder(i)).toBe(isPieceAtBottomBorder(i));
  }
});

function isPieceAtBottomBorder(i) {
  if (i > 55) {
    return true;
  } else {
    return false;
  }
}


test('#pieceAtSquare', () => {
  // Arrange
  const bishop = new Piece('black', 'bishop');
  const pawn = new Piece('black', 'pawn');
  const board = BoardHelper.blank();

  // Assume
  expect(board[2]).toBeNull();
  expect(pawn.pieceAtSquare(board, 2)).toBeFalsy();

  // Act
  board[2] = new Square(0, 2, bishop);

  // Assert
  expect(pawn.pieceAtSquare(board, 2)).toBeTruthy();
});

test('#teamPieceAtSquare', () => {
  // Arrange
  const blackBishop = new Piece('black', 'bishop');
  const whiteBishop = new Piece('white', 'bishop');
  const blackPawn = new Piece('black', 'pawn');
  const board = BoardHelper.blank();

  // Assume
  board[2] = new Square(0, 2, whiteBishop);
  expect(blackPawn.teamPieceAtSquare(board, 2)).toBeFalsy();

  // Act
  board[2] = new Square(0, 2, blackBishop);

  // Assert
  expect(blackPawn.teamPieceAtSquare(board, 2)).toBeTruthy();
});

test('#enemyPieceAtSquare', () => {
  // Arrange
  const blackBishop = new Piece('black', 'bishop');
  const whiteBishop = new Piece('white', 'bishop');
  const blackPawn = new Piece('black', 'pawn');
  const board = BoardHelper.blank();

  // Assume
  board[2] = new Square(0, 2, blackBishop);
  expect(blackPawn.enemyPieceAtSquare(board, 2)).toBeFalsy();

  // Act
  board[2] = new Square(0, 2, whiteBishop);

  // Assert
  expect(blackPawn.enemyPieceAtSquare(board, 2)).toBeTruthy();
});
