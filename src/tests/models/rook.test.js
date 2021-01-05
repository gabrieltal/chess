import Rook from '../../models/rook';
import Square from '../../models/square';
import BoardHelper from '../support/board_helpers';

// At starting position these are the available moves
test('Starting Position moves', () => {
  // Arrange
  const board = BoardHelper.default();
  const firstBlackRook = board[0];
  const secondBlackRook = board[7];
  const firstWhiteRook = board[56];
  const secondWhiteRook = board[63];

  // Assert
  expect(firstBlackRook.possibleMoves(board)).toStrictEqual([]);
  expect(secondBlackRook.possibleMoves(board)).toStrictEqual([]);
  expect(firstWhiteRook.possibleMoves(board)).toStrictEqual([]);
  expect(secondWhiteRook.possibleMoves(board)).toStrictEqual([]);
});

// Test the moves at the borders
test('Moves at the top left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[0] = new Square(0, 0, new Rook('white'));

  // Assert
  expect(board[0].possibleMoves(board)).toStrictEqual([8, 16, 24, 32, 40, 48, 56, 1, 2, 3, 4, 5, 6, 7]);
});

test('Moves at the top right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[7] = new Square(0, 7, new Rook('black'));

  // Assert
  expect(board[7].possibleMoves(board)).toStrictEqual([15, 23, 31, 39, 47, 55, 63, 6, 5, 4, 3, 2, 1, 0]);
});

test('Moves at the bottom left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[56] = new Square(7, 0, new Rook('black'));

  // Assert
  expect(board[56].possibleMoves(board)).toStrictEqual([48, 40, 32, 24, 16, 8, 0, 57, 58, 59, 60, 61, 62, 63]);
});

test('Moves at the bottom right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[63] = new Square(7, 7, new Rook('black'));

  // Assert
  expect(board[63].possibleMoves(board)).toStrictEqual([55, 47, 39, 31, 23, 15, 7, 62, 61, 60, 59, 58, 57, 56]);
});

test('Moves at the center', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Rook('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([27, 19, 11, 3, 43, 51, 59, 34, 33, 32, 36, 37, 38, 39]);
});

// Test moves if team pieces blocking
test('if teammate is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Rook('white'));
  board[43] = new Square(5, 3, new Rook('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([27, 19, 11, 3, 34, 33, 32, 36, 37, 38, 39]);
  expect(board[35].possibleMoves(board)).not.toContain(43);
  expect(board[35].possibleMoves(board)).not.toContain(51);
  expect(board[35].possibleMoves(board)).not.toContain(59);
});

// Test moves if enemy piece blocking
test('if enemy is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Rook('white'));
  board[27] = new Square(3, 3, new Rook('black'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([27, 43, 51, 59, 34, 33, 32, 36, 37, 38, 39]);
  expect(board[35].possibleMoves(board)).toContain(27);
  expect(board[35].possibleMoves(board)).not.toContain(19);
  expect(board[35].possibleMoves(board)).not.toContain(11);
  expect(board[35].possibleMoves(board)).not.toContain(3);
});
