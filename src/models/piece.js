export default class Piece {
  constructor(color, pieceName) {
    this.color = color;
    this.hasMoved = false;
    this.image = `/${pieceName}-${color}.png`;
    this.name = `${color} ${pieceName}`;
  }

  pieceAtSquare(squares, index) {
    return squares[index].piece;
  }

  teamPieceAtSquare(squares, position) {
    return squares[position].piece?.color === this.color;
  }

  enemyPieceAtSquare(squares, index) {
    return squares[index].piece?.color !== this.color;
  }

  // availableMoves(currentPosition) {
  //   return this.upMoves(currentPosition).concat(
  //     this.downMoves(currentPosition),
  //     this.leftMoves(currentPosition),
  //     this.rightMoves(currentPosition),
  //     this.topLeftDiagonalMoves(currentPosition),
  //     this.topRightDiagonalMoves(currentPosition),
  //     this.bottomLeftDiagonalMoves(currentPosition),
  //     this.bottomRightDiagonalMoves(currentPosition),
  //     this.jumpMoves(currentPosition)
  //   );
  // }
  //
  // upMoves(currentPosition) {
  //   return [];
  // }
  //
  // downMoves(currentPosition) {
  //   return [];
  // }
  //
  // leftMoves(currentPosition) {
  //   return [];
  // }
  //
  // rightMoves(currentPosition) {
  //   return [];
  // }
  //
  // topLeftDiagonalMoves(currentPosition) {
  //   return [];
  // }
  //
  // topRightDiagonalMoves(currentPosition) {
  //   return [];
  // }
  //
  // bottomLeftDiagonalMoves(currentPosition) {
  //   return [];
  // }
  //
  // bottomRightDiagonalMoves(currentPosition) {
  //   return [];
  // }
  //
  // jumpMoves(currentPosition) {
  //   return [];
  // }
}
