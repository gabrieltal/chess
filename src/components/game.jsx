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
import cloneDeep from 'lodash/cloneDeep';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    const players = this.setPlayers();

    this.state = {
      squares: this.initializeBoard(),
      message: 'Welcome! White\'s turn.',
      players: players,
      current: players['white'],
      selectedSquare: null,
      whiteGraveyard: [],
      blackGraveyard: [],
      history: new History(),
      check: false,
      checkmate: false
    };
  }

  initializeBoard() {
    let squares = Array(64).fill(null);

    // Black pieces
    squares[0] = new Square(0, 0, 0, new Rook('black'));
    squares[1] = new Square(1, 0, 1, new Knight('black'));
    squares[2] = new Square(2, 0, 2, new Bishop('black'));
    squares[3] = new Square(3, 0, 3, new Queen('black'));
    squares[4] = new Square(4, 0, 4, new King('black'));
    squares[5] = new Square(5, 0, 5, new Bishop('black'));
    squares[6] = new Square(6, 0, 6, new Knight('black'));
    squares[7] = new Square(7, 0, 7, new Rook('black'));

    // Black pawns
    squares[8] = new Square(8, 1, 0, new Pawn('black'));
    squares[9] = new Square(9, 1, 1, new Pawn('black'));
    squares[10] = new Square(10, 1, 2, new Pawn('black'));
    squares[11] = new Square(11, 1, 3, new Pawn('black'));
    squares[12] = new Square(12, 1, 4, new Pawn('black'));
    squares[13] = new Square(13, 1, 5, new Pawn('black'));
    squares[14] = new Square(14, 1, 6, new Pawn('black'));
    squares[15] = new Square(15, 1, 7, new Pawn('black'));

    let index = 16;
    for (let row = 2; row < 6; row++) {
      for (let col = 0; col < 8; col++) {
        squares[index] = new Square(index, row, col);
        index += 1;
      }
    }

    // White pieces
    squares[56] = new Square(56, 7, 0, new Rook('white'));
    squares[57] = new Square(57, 7, 1, new Knight('white'));
    squares[58] = new Square(58, 7, 2, new Bishop('white'));
    squares[59] = new Square(59, 7, 3, new Queen('white'));
    squares[60] = new Square(60, 7, 4, new King('white'));
    squares[61] = new Square(61, 7, 5, new Bishop('white'));
    squares[62] = new Square(62, 7, 6, new Knight('white'));
    squares[63] = new Square(63, 7, 7, new Rook('white'));

    // White pawns
    squares[48] = new Square(48, 6, 0, new Pawn('white'));
    squares[49] = new Square(49, 6, 1, new Pawn('white'));
    squares[50] = new Square(50, 6, 2, new Pawn('white'));
    squares[51] = new Square(51, 6, 3, new Pawn('white'));
    squares[52] = new Square(52, 6, 4, new Pawn('white'));
    squares[53] = new Square(53, 6, 5, new Pawn('white'));
    squares[54] = new Square(54, 6, 6, new Pawn('white'));
    squares[55] = new Square(55, 6, 7, new Pawn('white'));

    return squares;
  }

  pieces(squares, color) {
    const pieces = [];

    for (let i = 0; i < squares.length; i++) {
      if (squares[i].piece && squares[i].piece.color === color) {
        pieces.push(squares[i]);
      }
    }

    return pieces;
  }

  setPlayers() {
    let players = {};
    players['white'] = new Player('white');
    players['black'] = new Player('black');
    return players;
  }

  validateMove(selectedSquare, destinationSquare) {
    return (
      selectedSquare.possibleMoves(this.state.squares, { lastMove: this.state.history.lastMove() }).includes(destinationSquare.index)
      // Make sure the move doesn't put themself in check
      && !this.check(this.previewMove(selectedSquare, destinationSquare), this.state.current)
    );
  }

  previewMove(selectedSquare, destinationSquare, initSquares = this.state.squares) {
    let squares = cloneDeep(initSquares);
    squares[destinationSquare.index].piece = selectedSquare.piece;
    squares[selectedSquare.index].piece = null;

    return squares;
  }

  validateSelectedSquare(square) {
    return square.piece?.color === this.state.current.color;
  }

  handleClick(squareClicked) {
    let selectedSquare = this.state.selectedSquare;

    // If user clicked on a square with a piece that belongs to them, mark it selected
    if (this.validateSelectedSquare(squareClicked)) {
      return this.selectSquare(squareClicked);
    // Make move if piece is already selected and valid move
    } else if (selectedSquare && this.validateMove(selectedSquare, squareClicked)) {
      return this.movePiece(selectedSquare, squareClicked);
    // If piece was selected then the move was invalid
    } else if (selectedSquare) {
      return this.setState(oldState => ({
        message: 'You cannot move there.'
      }));
    // Else user wasn't allowed to click the square
    } else {
      return this.setState(oldState => ({
        message: `Please select one of the ${this.state.current.color} pieces to move.`
      }));
    }
  }

  movePiece(selectedSquare, destinationSquare) {
    let history = this.state.history;
    let current = this.state.current;
    let squares = this.state.squares;
    let blackGraveyard = this.state.blackGraveyard;
    let whiteGraveyard = this.state.whiteGraveyard;
    let capture = false;
    let promotion = false;

    // Add pieces to the graveyard that have been killed
    if (destinationSquare.piece?.color === 'white') {
      whiteGraveyard.push(destinationSquare.piece);
      capture = true;
    } else if (destinationSquare.piece?.color === 'black') {
      blackGraveyard.push(destinationSquare.piece);
      capture = true;
    }

    // Physically move the piece
    destinationSquare.piece = selectedSquare.piece;
    selectedSquare.piece = null;
    // Mark piece as having moved
    destinationSquare.piece.hasMoved = true;

    if (this.promotion(destinationSquare)) {
      promotion = true;
      destinationSquare.piece = new Queen(current.color);
    }

    // Setting up for the next player's turn
    let nextPlayer = current.color === 'white' ? this.state.players['black'] : this.state.players['white'];
    let check = this.check(squares, nextPlayer);
    let checkmate = false;
    if (check) {
      checkmate = this.checkmate(squares, nextPlayer);
    }
    let message = `${nextPlayer.color}'s turn. Please select a piece to move.`;

    if (checkmate) {
      message = `Checkmate! Congrats to ${current.color}. You won!`
    }

    // Updating game record
    history.logMove({ current: current, piece: destinationSquare.piece, move_to: destinationSquare.index, move_from: selectedSquare.index, check: check, checkmate: checkmate, capture: capture, promotion: promotion });

    this.setState(oldState => ({
      squares: squares,
      current: nextPlayer,
      message: message,
      selectedSquare: null,
      history: history,
      blackGraveyard: blackGraveyard,
      whiteGraveyard: whiteGraveyard,
      check: check,
      checkmate: checkmate
    }));
  }

  selectSquare(square) {
    this.setState(oldState => ({
      message: `Select where to move ${square.piece.name}`,
      selectedSquare: square
    }));
  }

  check(squares, player) {
    let kingSquare = squares.find((square) => square.piece?.name === `${player.color} king`);
    let enemySquares = this.pieces(squares, player.color === 'white' ? 'black' : 'white');

    // Cycle through the enemy pieces
    for (let idx = 0; idx < enemySquares.length; idx++) {
      let enemySquare = enemySquares[idx];

      // If any of the enemy pieces has a possible move that includes the king square, return true, check
      if (enemySquare.possibleMoves(squares).includes(kingSquare.index)) {
        return true;
      }
    }

    // Otherwise no check
    return false;
  }

  checkmate(squares, player) {
    let teammates = this.pieces(squares, player.color);

    // Cycle through the teammates...
    for (let x = 0; x < teammates.length; x++) {
      let teammate = teammates[x];
      let possibleMoves = teammate.possibleMoves(squares);

      // Go through each teammate's possible moves...
      for (let y = 0; y < possibleMoves.length; y++) {
        let availableMove = possibleMoves[y];

        // If any move gets the King out of check then return false, no checkmate
        if (!this.check(this.previewMove(teammate, squares[availableMove], squares), player)) {
          return false;
        }
      }
    }

    // Otherwise return true. No possible moves left.
    return true;
  }

  promotion(square) {
    if (square.piece.color === 'black') {
      if (square.row === 7) {
        return true;
      }
    } else {
      if (square.row === 0) {
        return true;
      }
    }

    return false;
  }

  render() {
    return (
      <main className="container vw-100 vh-100">
        <Scoreboard players={this.state.players} current={this.state.current} moves={this.state.history.moves} whiteGraveyard={this.state.whiteGraveyard} blackGraveyard={this.state.blackGraveyard} />
        <Board squares={this.state.squares} checkmate={this.state.checkmate} message={this.state.message} selectedSquare={this.state.selectedSquare} lastMove={this.state.history.lastMove()} onClick={(index) => this.handleClick(index) }/>
      </main>
    );
  }
}
