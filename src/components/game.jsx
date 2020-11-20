import React from 'react';
import Board from './board';
import Knight from './pieces/knight';
import Bishop from './pieces/bishop';
import King from './pieces/king';
import Queen from './pieces/queen';
import Rook from './pieces/rook';
import Pawn from './pieces/pawn';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: this.initializeBoard(),
      message: 'Welcome! White\'s turn.',
      current: 'white',
      selectedPiece: null,
      whiteGraveyard: [],
      blackGraveyard: []
    };
  }

  initializeBoard() {
    let squares = Array(64).fill(null);

    // Black pieces
    squares[0] = new Rook('black');
    squares[1] = new Knight('black');
    squares[2] = new Bishop('black');
    squares[3] = new Queen('black');
    squares[4] = new King('black');
    squares[5] = new Bishop('black');
    squares[6] = new Knight('black');
    squares[7] = new Rook('black');

    // Black pawns
    squares[8]= new Pawn('black');
    squares[9]= new Pawn('black');
    squares[10]= new Pawn('black');
    squares[11]= new Pawn('black');
    squares[12]= new Pawn('black');
    squares[13]= new Pawn('black');
    squares[14]= new Pawn('black');
    squares[15]= new Pawn('black');

    // White pieces
    squares[56] = new Rook('white');
    squares[57] = new Knight('white');
    squares[58] = new Bishop('white');
    squares[59] = new Queen('white');
    squares[60] = new King('white');
    squares[61] = new Bishop('white');
    squares[62] = new Knight('white');
    squares[63] = new Rook('white')

    // White pawns
    squares[48] = new Pawn('white');
    squares[49] = new Pawn('white');
    squares[50] = new Pawn('white');
    squares[51] = new Pawn('white');
    squares[52] = new Pawn('white');
    squares[53] = new Pawn('white');
    squares[54] = new Pawn('white');
    squares[55] = new Pawn('white');

    return squares;
  }

  handleClick(index) {
    let piece = this.state.squares[index];
    let newSquareState = [...this.state.squares];

    newSquareState[index - 8] = piece;
    newSquareState[index] = null;

    let newCurrentPlayer = this.state.current === 'white' ? 'black' : 'white';

    this.setState(oldState => ({
      squares: newSquareState,
      current: newCurrentPlayer,
      message: `${newCurrentPlayer}'s turn.`
    }));
  }

  render() {
    return (
      <main className="d-flex flex-column align-items-center vw-100">
        <Board squares={this.state.squares} onClick={(index) => this.handleClick(index) }/>

        <section>
          <p>{this.state.message}</p>
        </section>
      </main>
    );
  }
}
