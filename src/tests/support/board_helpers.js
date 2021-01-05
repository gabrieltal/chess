import Square from '../../models/square';
import Rook from '../../models/rook';
import Knight from '../../models/knight';
import Bishop from '../../models/bishop';
import King from '../../models/king';
import Queen from '../../models/queen';
import Pawn from '../../models/pawn';

export default class BoardHelper {
  static blank() {
    return Array(64).fill(null);
  }

  static default() {
    const squares = this.blank();

    // Black pieces
    squares[0] = new Square(0, 0, new Rook('black'));
    squares[1] = new Square(0, 1, new Knight('black'));
    squares[2] = new Square(0, 2, new Bishop('black'));
    squares[3] = new Square(0, 3, new Queen('black'));
    squares[4] = new Square(0, 4, new King('black'));
    squares[5] = new Square(0, 5, new Bishop('black'));
    squares[6] = new Square(0, 6, new Knight('black'));
    squares[7] = new Square(0, 7, new Rook('black'));

    // Black pawns
    squares[8] = new Square(1, 0, new Pawn('black'));
    squares[9] = new Square(1, 1, new Pawn('black'));
    squares[10] = new Square(1, 2, new Pawn('black'));
    squares[11] = new Square(1, 3, new Pawn('black'));
    squares[12] = new Square(1, 4, new Pawn('black'));
    squares[13] = new Square(1, 5, new Pawn('black'));
    squares[14] = new Square(1, 6, new Pawn('black'));
    squares[15] = new Square(1, 7, new Pawn('black'));

    let index = 16;
    for (let row = 2; row < 6; row++) {
      for (let col = 0; col < 8; col++) {
        squares[index] = new Square(row, col);
        index += 1;
      }
    }

    // White pieces
    squares[56] = new Square(7, 0, new Rook('white'));
    squares[57] = new Square(7, 1, new Knight('white'));
    squares[58] = new Square(7, 2, new Bishop('white'));
    squares[59] = new Square(7, 3, new Queen('white'));
    squares[60] = new Square(7, 4, new King('white'));
    squares[61] = new Square(7, 5, new Bishop('white'));
    squares[62] = new Square(7, 6, new Knight('white'));
    squares[63] = new Square(7, 7, new Rook('white'));

    // White pawns
    squares[48] = new Square(6, 0, new Pawn('white'));
    squares[49] = new Square(6, 1, new Pawn('white'));
    squares[50] = new Square(6, 2, new Pawn('white'));
    squares[51] = new Square(6, 3, new Pawn('white'));
    squares[52] = new Square(6, 4, new Pawn('white'));
    squares[53] = new Square(6, 5, new Pawn('white'));
    squares[54] = new Square(6, 6, new Pawn('white'));
    squares[55] = new Square(6, 7, new Pawn('white'));

    return squares;
  }
};
