import Piece from '../models/piece';
import Square from '../models/square';
import { blankBoard } from './support/board_helpers';

test('#atLeftBorder', () => {
  // Arrange
  const piece = new Piece('black', 'bishop');

  for (let i = 0; i < 64; i++) {
    if (i % 8 === 0) {
      // Act && Assert
      expect(piece.atLeftBorder(i)).toBeTruthy();
    } else {
      expect(piece.atLeftBorder(i)).toBeFalsy();
    }
  }
});

test('#atRightBorder', () => {
  // Arrange
  const piece = new Piece('black', 'bishop');

  for (let i = 0; i < 64; i++) {
    if ((i + 1) % 8 === 0) {
      // Act && Assert
      expect(piece.atRightBorder(i)).toBeTruthy();
    } else {
      expect(piece.atRightBorder(i)).toBeFalsy();
    }
  }
});

test('#atTopBorder', () => {
  // Arrange
  const piece = new Piece('black', 'bishop');

  for (let i = 0; i < 64; i++) {
    if (i < 7) {
      // Act && Assert
      expect(piece.atTopBorder(i)).toBeTruthy();
    } else {
      expect(piece.atTopBorder(i)).toBeFalsy();
    }
  }
});

test('#atBottomBorder', () => {
  // Arrange
  const piece = new Piece('black', 'bishop');

  for (let i = 0; i < 64; i++) {
    if (i > 55) {
      // Act && Assert
      expect(piece.atBottomBorder(i)).toBeTruthy();
    } else {
      expect(piece.atBottomBorder(i)).toBeFalsy();
    }
  }
});

test('#pieceAtSquare', () => {
  // Arrange
  const bishop = new Piece('black', 'bishop');
  const pawn = new Piece('black', 'pawn');
  const board = blankBoard();

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
  const board = blankBoard();

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
  const board = blankBoard();

  // Assume
  board[2] = new Square(0, 2, blackBishop);
  expect(blackPawn.enemyPieceAtSquare(board, 2)).toBeFalsy();

  // Act
  board[2] = new Square(0, 2, whiteBishop);

  // Assert
  expect(blackPawn.enemyPieceAtSquare(board, 2)).toBeTruthy();
});
