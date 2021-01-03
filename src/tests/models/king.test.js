import King from '../../models/king';
import Square from '../../models/square';
import BoardHelper from '../support/board_helpers';

// At starting position these are the available moves
test('Starting Position moves', () => {
  // Arrange
  const board = BoardHelper.default();
  const blackKing = board[4];
  const whiteKing = board[60];

  // Assert
  expect(blackKing.possibleMoves(board)).toStrictEqual([]);
  expect(whiteKing.possibleMoves(board)).toStrictEqual([]);
});

// Test the moves at the borders
test('Moves at the top left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[0] = new Square(0, 0, new King('white'));

  // Assert
  expect(board[0].possibleMoves(board)).toStrictEqual([1, 8, 9]);
});

test('Moves at the top right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[7] = new Square(0, 7, new King('black'));

  // Assert
  expect(board[7].possibleMoves(board)).toStrictEqual([6, 15, 14]);
});

test('Moves at the bottom left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[56] = new Square(7, 0, new King('black'));

  // Assert
  expect(board[56].possibleMoves(board)).toStrictEqual([48, 49, 57]);
});

test('Moves at the bottom right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[63] = new Square(7, 7, new King('black'));

  // Assert
  expect(board[63].possibleMoves(board)).toStrictEqual([55, 54, 62]);
});

test('Moves at the center', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new King('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([27, 26, 28, 34, 36, 43, 42, 44]);
});

// Test moves if team pieces blocking
test('if teammate is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new King('white'));
  board[42] = new Square(5, 2, new King('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([27, 26, 28, 34, 36, 43, 44]);
  expect(board[35].possibleMoves(board)).not.toContain(42);
});

// Test moves if enemy piece blocking
test('if enemy is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new King('white'));
  board[28] = new Square(3, 4, new King('black'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([27, 26, 28, 34, 36, 43, 42, 44]);
  expect(board[35].possibleMoves(board)).toContain(28);
});
