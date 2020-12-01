import Square from './square';
import React from 'react';
import PlayerCard from './playercard';

export default class Scoreboard extends React.Component {
  displayMoveList(moves) {
    const moveList = [];
    let whiteMove, blackMove;

    for (let i = 0; i < moves.length; i++) {
      whiteMove = moves[i];
      blackMove = null;

      if (i !== (moves.length - 1)) {
        i += 1;
        blackMove = moves[i];
      }

      moveList.push(
        <li key={i}>
          <div className="move-description">
            <span>{whiteMove.notation}</span>
            <span>{blackMove?.notation}</span>
          </div>
        </li>
      );
    }

    return moveList;
  }

  render() {
    return (
      <section className="scoreboard">
        <PlayerCard player={this.props.players['black']} current={this.props.current} />
        <div className="p-2">
          <ol className="move-history bg-white h-100 m-0">
            {this.displayMoveList(this.props.moves)}
          </ol>
        </div>
        <PlayerCard player={this.props.players['white']} current={this.props.current} />
      </section>
    );
  }
};
