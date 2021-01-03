import Square from '../../models/square';

test('return bg-dark if row is even && col is even', () => {
  // Arrange
  const square = new Square(2, 2, null);

  // Assert
  expect(square.bgColor).toBe('bg-dark');
});

test('return bg-light if row is even && col is odd', () => {
  // Arrange
  const square = new Square(2, 1, null);

  // Assert
  expect(square.bgColor).toBe('bg-light');
});

test('return bg-light if row is odd && col is even', () => {
  // Arrange
  const square = new Square(1, 0, null);

  // Assert
  expect(square.bgColor).toBe('bg-light');
});

test('return bg-dark if row is odd && col is odd', () => {
  // Arrange
  const square = new Square(3, 3, null);

  // Assert
  expect(square.bgColor).toBe('bg-dark');
});

test('index is incremental by row and column', () => {
  // Arrange
  let index = 0;
  let square;

  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
      // Act
      square = new Square(row, col, null);

      // Assert
      expect(square.index).toBe(index);
      index += 1;
    }
  }
});

test('possibleMoves returns false if no piece', () => {
  // Arrange
  const square = new Square(3, 3, null);

  // Assume
  expect(square.piece).toBeNull();

  // Assert
  expect(square.possibleMoves([])).toBeFalsy();
});
