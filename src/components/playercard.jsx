import React from 'react';

export default class PlayerCard extends React.Component {
  displayGraveyard() {
    return this.props.graveyard.map((piece, i) => {
      return <img key={`${piece.name}-${i}`} src={piece.image} alt={piece.name} height="20px" width="20px"/>;
    });
  }

  render() {
    return (
      <div className="player-card bg-white d-flex flex-column justify-content-between p-1 m-2">
        <div className="d-flex justify-content-between">
          <h2 className="m-0 capitalize">{this.props.player.color}</h2>
          <span className={`bg-grey p-1 white badge ${this.props.current === this.props.player ? 'bg-blue' : 'bg-grey' }`}>Your turn</span>
        </div>

        <div className="graveyard d-flex">
          {this.displayGraveyard()}
        </div>
      </div>
    );
  }
};
