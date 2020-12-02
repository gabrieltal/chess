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
    squares[0] = new Rook('black', 0);
    squares[1] = new Knight('black', 1);
    squares[2] = new Bishop('black', 2);
    squares[3] = new Queen('black', 3);
    squares[4] = new King('black', 4);
    squares[5] = new Bishop('black', 5);
    squares[6] = new Knight('black', 6);
    squares[7] = new Rook('black', 7);

    // Black pawns
    squares[8]= new Pawn('black', 8);
    squares[9]= new Pawn('black', 9);
    squares[10]= new Pawn('black', 10);
    squares[11]= new Pawn('black', 11);
    squares[12]= new Pawn('black', 12);
    squares[13]= new Pawn('black', 13);
    squares[14]= new Pawn('black', 14);
    squares[15]= new Pawn('black', 15);

    // White pieces
    squares[56] = new Rook('white', 56);
    squares[57] = new Knight('white', 57);
    squares[58] = new Bishop('white', 58);
    squares[59] = new Queen('white', 59);
    squares[60] = new King('white', 60);
    squares[61] = new Bishop('white', 61);
    squares[62] = new Knight('white', 62);
    squares[63] = new Rook('white', 63)

    // White pawns
    squares[48] = new Pawn('white', 48);
    squares[49] = new Pawn('white', 49);
    squares[50] = new Pawn('white', 50);
    squares[51] = new Pawn('white', 51);
    squares[52] = new Pawn('white', 52);
    squares[53] = new Pawn('white', 53);
    squares[54] = new Pawn('white', 54);
    squares[55] = new Pawn('white', 55);

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

  handleClick(index) {
    let squareClicked = this.state.squares[index];
    let selectedPiece = this.state.selectedPiece;

    // If user has already selected a piece...
    if (selectedPiece) {
      // Make move if piece is already selected and valid move
      if (this.validateMove(selectedPiece, index)) {
        return this.movePiece(selectedPiece, index);
      // If the selected square has a piece that is on the same team as the user then mark that new piece as selected
      } else if (this.validateSelectedPiece(squareClicked)) {
        return this.selectPiece(squareClicked);
      // Move was invalid otherwise
      } else {
        return this.setState(oldState => ({
          message: 'You cannot move there.'
        }));
      }
    // Else if user hasn't selected a piece yet, check if user is allowed to select the square
    } else if (this.validateSelectedPiece(squareClicked)) {
      return this.selectPiece(squareClicked);
    // Else user wasn't allowed to click the square
    } else {
      return this.setState(oldState => ({
        message: `Please select one of the ${this.state.current.color} pieces to move.`
      }));
    }
  }

  movePiece(piece, index) {
    let history = this.state.history;
    let current = this.state.current;
    let squares = this.state.squares;
    let blackGraveyard = this.state.blackGraveyard;
    let whiteGraveyard = this.state.whiteGraveyard;

    // Updating game record
    history.logMove({ current: current, piece: piece, move_to: index, move_from: piece.currentPosition });

    // Add pieces to the graveyard that have been killed
    if (squares[index] && squares[index].color === 'white') {
      whiteGraveyard.push(squares[index]);
    } else if (squares[index] && squares[index].color === 'black') {
      blackGraveyard.push(squares[index]);
    }

    // Physically move the piece
    squares[index] = piece;
    squares[piece.currentPosition] = null;

    // Mark piece as having moved and update its currentPosition
    piece.makeMove(index);

    // Setting up for the next player's turn
    current = current.color === 'white' ? this.state.players['black'] : this.state.players['white'];

    this.setState(oldState => ({
      squares: squares,
      current: current,
      message: `${current.color}'s turn. Please select a piece to move.`,
      selectedPiece: null,
      history: history,
      blackGraveyard: blackGraveyard,
      whiteGraveyard: whiteGraveyard
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
