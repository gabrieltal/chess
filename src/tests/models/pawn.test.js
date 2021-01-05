import Pawn from '../../models/pawn';
import Square from '../../models/square';
import BoardHelper from '../support/board_helpers';

// At starting position these are the available moves
test('Starting Position moves', () => {
  // Arrange
  const board = BoardHelper.default();

  // Act/Assert
  for (let i = 8; i < 16; i++) {
    expect(board[i].possibleMoves(board)).toContain(i + 8);
    expect(board[i].possibleMoves(board)).toContain(i + 16);
  }

  // Act/Assert
  for (let i = 48; i < 56; i++) {
    expect(board[i].possibleMoves(board)).toContain(i - 8);
    expect(board[i].possibleMoves(board)).toContain(i - 16);
  }
});

// Test the moves at the borders
test('Moves at the top left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[0] = new Square(0, 0, new Pawn('black'));

  // Assert
  expect(board[0].possibleMoves(board)).toStrictEqual([8, 16]);
});

test('Moves at the top right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[7] = new Square(0, 7, new Pawn('black'));

  // Assert
  expect(board[7].possibleMoves(board)).toStrictEqual([15, 23]);
});

test('Moves at the bottom left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[56] = new Square(7, 0, new Pawn('white'));

  // Assert
  expect(board[56].possibleMoves(board)).toStrictEqual([48, 40]);
});

test('Moves at the bottom right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[63] = new Square(7, 7, new Pawn('white'));

  // Assert
  expect(board[63].possibleMoves(board)).toStrictEqual([55, 47]);
});

test('Moves at the center', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Pawn('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([27, 19]);
});

// Test moves if team pieces blocking
test('if teammate is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Pawn('black'));
  board[43] = new Square(5, 3, new Pawn('black'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([]);
  expect(board[35].possibleMoves(board)).not.toContain(43);
  expect(board[35].possibleMoves(board)).not.toContain(51);
});

// Test moves if enemy piece blocking
test('if enemy is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Pawn('black'));
  board[43] = new Square(5, 3, new Pawn('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([]);
  expect(board[35].possibleMoves(board)).not.toContain(43);
  expect(board[35].possibleMoves(board)).not.toContain(51);
});

// Test enemy strikes
test('if enemy is in striking distance', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Pawn('black'));
  board[42] = new Square(5, 2, new Pawn('white'));
  board[44] = new Square(5, 4, new Pawn('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([43, 51, 42, 44]);
});

// Special cases
test('can only move 1 square after initial move', () => {
  // Arrange
  const board = BoardHelper.default();

  // Act
  board[8].piece.hasMoved = true;
  board[48].piece.hasMoved = true;

  // Assert
  expect(board[8].possibleMoves(board)).toStrictEqual([16]);
  expect(board[48].possibleMoves(board)).toStrictEqual([40]);
});
