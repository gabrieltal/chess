import Knight from '../../models/knight';
import Square from '../../models/square';
import BoardHelper from '../support/board_helpers';

// At starting position these are the available moves
test('Starting Position moves', () => {
  // Arrange
  const board = BoardHelper.default();
  const firstBlackKnight = board[1];
  const secondBlackKnight = board[6];
  const firstWhiteKnight = board[57];
  const secondWhiteKnight = board[62];

  // Assert
  expect(firstBlackKnight.possibleMoves(board)).toStrictEqual([16, 18]);
  expect(secondBlackKnight.possibleMoves(board)).toStrictEqual([21, 23]);
  expect(firstWhiteKnight.possibleMoves(board)).toStrictEqual([40, 42]);
  expect(secondWhiteKnight.possibleMoves(board)).toStrictEqual([45, 47]);
});

// Test the moves at the borders
test('Moves at the top left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[0] = new Square(0, 0, new Knight('white'));

  // Assert
  expect(board[0].possibleMoves(board)).toStrictEqual([17, 10]);
});

test('Moves at the top right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[7] = new Square(0, 7, new Knight('black'));

  // Assert
  expect(board[7].possibleMoves(board)).toStrictEqual([22, 13]);
});

test('Moves at the bottom left corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[56] = new Square(7, 0, new Knight('black'));

  // Assert
  expect(board[56].possibleMoves(board)).toStrictEqual([41, 50]);
});

test('Moves at the bottom right corner', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[63] = new Square(7, 7, new Knight('black'));

  // Assert
  expect(board[63].possibleMoves(board)).toStrictEqual([46, 53]);
});

test('Moves at the center', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Knight('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([18, 20, 25, 29, 50, 52, 41, 45]);
});

// Test moves if team pieces blocking
test('if teammate is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Knight('white'));
  board[18] = new Square(3, 2, new Knight('white'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([20, 25, 29, 50, 52, 41, 45]);
  expect(board[35].possibleMoves(board)).not.toContain(18);
});

// Test moves if enemy piece blocking
test('if enemy is blocking a path', () => {
  // Arrange
  const board = BoardHelper.blank();
  board[35] = new Square(4, 3, new Knight('white'));
  board[20] = new Square(2, 4, new Knight('black'));

  // Assert
  expect(board[35].possibleMoves(board)).toStrictEqual([18, 20, 25, 29, 50, 52, 41, 45]);
  expect(board[35].possibleMoves(board)).toContain(20);
});
