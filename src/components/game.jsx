import React from 'react';
import Board from './board';
import Scoreboard from './scoreboard';
import Knight from '../models/knight';
import Bishop from '../models/bishop';
import King from '../models/king';
import Queen from '../models/queen';
import Rook from '../models/rook';
import Pawn from '../models/pawn';
import History from '../models/history';
import Player from '../models/player';
import Square from '../models/square';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    const players = this.setPlayers();

    this.state = {
      squares: this.initializeBoard(),
      message: 'Welcome! White\'s turn.',
      players: players,
      current: players['white'],
      selectedPiece: null,
      whiteGraveyard: [],
      blackGraveyard: [],
      history: new History()
    };
  }

  initializeBoard() {
    let squares = Array(64).fill(null);

    // Black pieces
    squares[0] = new Square(0, 0, 0, new Rook('black', 0));
    squares[1] = new Square(1, 0, 1, new Knight('black', 1));
    squares[2] = new Square(2, 0, 2, new Bishop('black', 2));
    squares[3] = new Square(3, 0, 3, new Queen('black', 3));
    squares[4] = new Square(4, 0, 4, new King('black', 4));
    squares[5] = new Square(5, 0, 5, new Bishop('black', 5));
    squares[6] = new Square(6, 0, 6, new Knight('black', 6));
    squares[7] = new Square(7, 0, 7, new Rook('black', 7));

    // Black pawns
    squares[8] = new Square(8, 1, 0, new Pawn('black', 8));
    squares[9] = new Square(9, 1, 1, new Pawn('black', 9));
    squares[10] = new Square(10, 1, 2, new Pawn('black', 10));
    squares[11] = new Square(11, 1, 3, new Pawn('black', 11));
    squares[12] = new Square(12, 1, 4, new Pawn('black', 12));
    squares[13] = new Square(13, 1, 5, new Pawn('black', 13));
    squares[14] = new Square(14, 1, 6, new Pawn('black', 14));
    squares[15] = new Square(15, 1, 7, new Pawn('black', 15));

    let index = 16;
    for (let row = 2; row < 6; row++) {
      for (let col = 0; col < 8; col++) {
        squares[index] = new Square(index, row, col);
        index += 1;
      }
    }

    // White pieces
    squares[56] = new Square(56, 7, 0, new Rook('white', 56));
    squares[57] = new Square(57, 7, 1, new Knight('white', 57));
    squares[58] = new Square(58, 7, 2, new Bishop('white', 58));
    squares[59] = new Square(59, 7, 3, new Queen('white', 59));
    squares[60] = new Square(60, 7, 4, new King('white', 60));
    squares[61] = new Square(61, 7, 5, new Bishop('white', 61));
    squares[62] = new Square(62, 7, 6, new Knight('white', 62));
    squares[63] = new Square(63, 7, 7, new Rook('white', 63));

    // White pawns
    squares[48] = new Square(48, 6, 0, new Pawn('white', 48));
    squares[49] = new Square(49, 6, 1, new Pawn('white', 49));
    squares[50] = new Square(50, 6, 2, new Pawn('white', 50));
    squares[51] = new Square(56, 6, 3, new Pawn('white', 51));
    squares[52] = new Square(52, 6, 4, new Pawn('white', 52));
    squares[53] = new Square(53, 6, 5, new Pawn('white', 53));
    squares[54] = new Square(54, 6, 6, new Pawn('white', 54));
    squares[55] = new Square(55, 6, 7, new Pawn('white', 55));

    return squares;
  }

  setPlayers() {
    let players = {};
    players['white'] = new Player('white');
    players['black'] = new Player('black');
    return players;
  }

  validateMove(piece, index) {
    return piece.possibleMoves(this.state.squares).includes(index);
  }

  validateSelectedPiece(piece) {
    return piece && (piece.color === this.state.current.color);
  }

  handleClick(squareClicked) {
    let selectedPiece = this.state.selectedPiece;

    // If user has already selected a piece...
    if (selectedPiece) {
      // Make move if piece is already selected and valid move
      if (this.validateMove(selectedPiece, squareClicked.index)) {
        return this.movePiece(selectedPiece, squareClicked);
      // If the selected square has a piece that is on the same team as the user then mark that new piece as selected
    } else if (this.validateSelectedPiece(squareClicked.piece)) {
        return this.selectPiece(squareClicked.piece);
      // Move was invalid otherwise
      } else {
        return this.setState(oldState => ({
          message: 'You cannot move there.'
        }));
      }
    // Else if user hasn't selected a piece yet, check if user is allowed to select the square
    } else if (this.validateSelectedPiece(squareClicked.piece)) {
      return this.selectPiece(squareClicked.piece);
    // Else user wasn't allowed to click the square
    } else {
      return this.setState(oldState => ({
        message: `Please select one of the ${this.state.current.color} pieces to move.`
      }));
    }
  }

  movePiece(piece, square) {
    let history = this.state.history;
    let current = this.state.current;
    let squares = this.state.squares;
    let blackGraveyard = this.state.blackGraveyard;
    let whiteGraveyard = this.state.whiteGraveyard;
    let movingFrom = piece.currentPosition;

    // Add pieces to the graveyard that have been killed
    if (square.piece && square.piece.color === 'white') {
      whiteGraveyard.push(square.piece);
    } else if (square.piece && square.piece.color === 'black') {
      blackGraveyard.push(square.piece);
    }

    // Physically move the piece
    square.piece = piece;
    squares[movingFrom].piece = null;

    // Mark piece as having moved and update its currentPosition
    piece.makeMove(square.index);

    // Setting up for the next player's turn
    let nextPlayer = current.color === 'white' ? this.state.players['black'] : this.state.players['white'];
    let inCheck = this.check(squares, nextPlayer);

    // Updating game record
    history.logMove({ current: current, piece: piece, move_to: square.index, move_from: movingFrom, inCheck: inCheck });

    this.setState(oldState => ({
      squares: squares,
      current: nextPlayer,
      message: `${nextPlayer.color}'s turn. Please select a piece to move.`,
      selectedPiece: null,
      history: history,
      blackGraveyard: blackGraveyard,
      whiteGraveyard: whiteGraveyard,
      check: inCheck
    }));
  }

  selectPiece(piece) {
    this.setState(oldState => ({
      message: `Select where to move ${piece.name}`,
      selectedPiece: piece
    }));
  }

  render() {
    return (
      <main className="container vw-100 vh-100">
        <Scoreboard players={this.state.players} current={this.state.current} moves={this.state.history.moves} whiteGraveyard={this.state.whiteGraveyard} blackGraveyard={this.state.blackGraveyard} />
        <Board squares={this.state.squares} selectedPiece={this.state.selectedPiece} lastMove={this.state.history.lastMove()} onClick={(index) => this.handleClick(index) }/>
      </main>
    );
  }
}
