export default class History {
  constructor() {
    this.moves = [];
  }

  logMove(description) {
    description['notation'] = this.translateToChessNotation(
      description['piece'],
      description['move_to']
    );
    this.moves.push(description);
    return description;
  }

  lastMove() {
    return this.moves[this.moves.length - 1];
  }

  translateToChessNotation(piece, movedTo) {
    let x, y;
    const PIECE_DICTIONARY = {
      Pawn: '',
      King: 'K',
      Queen: 'Q',
      Bishop: 'B',
      Knight: 'N',
      Rook: 'R'
    };

    if (movedTo % 8 === 0) {
      x = 'a';
    } else if ((movedTo - 1) % 8 === 0) {
      x = 'b';
    } else if ((movedTo - 2) % 8 === 0) {
      x = 'c';
    } else if ((movedTo - 3) % 8 === 0) {
      x = 'd';
    } else if ((movedTo - 4) % 8 === 0) {
      x = 'e';
    } else if ((movedTo - 5) % 8 === 0) {
      x = 'f';
    } else if ((movedTo - 6) % 8 === 0) {
      x = 'g';
    } else {
      x = 'h';
    }

    if (movedTo < 8) {
      y = '8';
    } else if (movedTo < 16) {
      y = '7';
    } else if (movedTo < 24) {
      y = '6';
    } else if (movedTo < 32) {
      y = '5';
    } else if (movedTo < 40) {
      y = '4';
    } else if (movedTo < 48) {
      y = '3';
    } else if (movedTo < 56) {
      y = '2';
    } else {
      y = '1';
    }

    return `${PIECE_DICTIONARY[piece.constructor.name]}${x}${y}`;
  }
}