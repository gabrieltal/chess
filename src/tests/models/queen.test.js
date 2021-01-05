import Queen from '../../models/queen';
import Square from '../../models/square';
import BoardHelper from '../support/board_helpers';

// At starting position these are the available moves
test('Starting Position moves', () => {
  // Arrange
  const board = BoardHelper.default();
  const blackQueen = board[3];
  const whiteQueen = board[59];

  // Assert
  expect(blackQueen.possibleMoves(board)).toStrictEqual([]);
  expect(whiteQueen.possibleMoves(board)).toStrictEqual([]);
});

// Test the moves at the borders
test('Moves at the top left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[0] = new Square(0, 0, new Queen('white'));

  // Assert
  expect(board[0].possibleMoves(board)).toStrictEqual([8, 9, 16, 18, 24, 27, 32, 36, 40, 45, 48, 54, 56, 63, 1, 2, 3, 4, 5, 6, 7]);
});

test('Moves at the top right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[7] = new Square(0, 7, new Queen('black'));

  // Assert
  expect(board[7].possibleMoves(board)).toStrictEqual([14, 15, 21, 23, 28, 31, 35, 39, 42, 47, 49, 55, 56, 63, 6, 5, 4, 3, 2, 1, 0]);
});

test('Moves at the bottom left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[56] = new Square(7, 0, new Queen('black'));

  // Assert
  expect(board[56].possibleMoves(board)).toStrictEqual([48, 49, 40, 42, 32, 35, 24, 28, 16, 21, 8, 14, 0, 7, 57, 58, 59, 60, 61, 62, 63]);
});

test('Moves at the bottom right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[63] = new Square(7, 7, new Queen('black'));

  // Assert
  expect(board[63].possibleMoves(board)).toStrictEqual([54, 55, 45, 47, 36, 39, 27, 31, 18, 23, 9, 15, 0, 7, 62, 61, 60, 59, 58, 57, 56]);
});

test('Moves at the center', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Queen('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([26, 27, 28, 17, 19, 21, 8, 11, 14, 3, 7, 42, 43, 44, 49, 51, 53, 56, 59, 62, 34, 36, 33, 37, 32, 38, 39]);
});

// Test moves if team pieces blocking
test('if teammate is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Queen('white'));
  board[42] = new Square(5, 2, new Queen('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([26, 27, 28, 17, 19, 21, 8, 11, 14, 3, 7, 43, 44, 51, 53, 59, 62, 34, 36, 33, 37, 32, 38, 39]);
  expect(board[35].possibleMoves(board)).not.toContain(42);
  expect(board[35].possibleMoves(board)).not.toContain(49);
  expect(board[35].possibleMoves(board)).not.toContain(56);
});

// Test moves if enemy piece blocking
test('if enemy is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Queen('white'));
  board[28] = new Square(3, 4, new Queen('black'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([26, 27, 28, 17, 19, 8, 11, 3, 42, 43, 44, 49, 51, 53, 56, 59, 62, 34, 36, 33, 37, 32, 38, 39]);
  expect(board[35].possibleMoves(board)).toContain(28);
  expect(board[35].possibleMoves(board)).not.toContain(21);
  expect(board[35].possibleMoves(board)).not.toContain(14);
  expect(board[35].possibleMoves(board)).not.toContain(7);
});
