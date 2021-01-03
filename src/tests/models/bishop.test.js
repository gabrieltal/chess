import Bishop from '../../models/bishop';
import Square from '../../models/square';
import BoardHelper from '../support/board_helpers';

// At starting position these are the available moves
test('Starting Position moves', () => {
  // Arrange
  const board = BoardHelper.default();
  const firstBlackBishop = board[2];
  const secondBlackBishop = board[5];
  const firstWhiteBishop = board[58];
  const secondWhiteBishop = board[61];

  // Assert
  expect(firstBlackBishop.possibleMoves(board)).toStrictEqual([]);
  expect(secondBlackBishop.possibleMoves(board)).toStrictEqual([]);
  expect(firstWhiteBishop.possibleMoves(board)).toStrictEqual([]);
  expect(secondWhiteBishop.possibleMoves(board)).toStrictEqual([]);
});

// Test the moves at the borders
test('Moves at the top left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[0] = new Square(0, 0, new Bishop('white'));

  // Assert
  expect(board[0].possibleMoves(board)).toStrictEqual([9, 18, 27, 36, 45, 54, 63]);
});

test('Moves at the top right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[7] = new Square(0, 7, new Bishop('black'));

  // Assert
  expect(board[7].possibleMoves(board)).toStrictEqual([14, 21, 28, 35, 42, 49, 56]);
});

test('Moves at the bottom left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[56] = new Square(7, 0, new Bishop('black'));

  // Assert
  expect(board[56].possibleMoves(board)).toStrictEqual([49, 42, 35, 28, 21, 14, 7]);
});

test('Moves at the bottom right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[63] = new Square(7, 7, new Bishop('black'));

  // Assert
  expect(board[63].possibleMoves(board)).toStrictEqual([54, 45, 36, 27, 18, 9, 0]);
});

test('Moves at the center', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Bishop('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([26, 17, 8, 28, 21, 14, 7, 42, 49, 56, 44, 53, 62]);
});

// Test moves if team pieces blocking
test('if teammate is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Bishop('white'));
  board[42] = new Square(5, 2, new Bishop('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([26, 17, 8, 28, 21, 14, 7, 44, 53, 62]);
  expect(board[35].possibleMoves(board)).not.toContain(42);
});

// Test moves if enemy piece blocking
test('if enemy is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Bishop('white'));
  board[28] = new Square(3, 4, new Bishop('black'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([26, 17, 8, 28, 42, 49, 56, 44, 53, 62]);
  expect(board[35].possibleMoves(board)).toContain(28);
});
