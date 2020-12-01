import React from 'react';

export default class PlayerCard extends React.Component {
  render() {
    return (
      <div className="d-block p-2">
        <div className="player-card bg-white d-flex align-items-start justify-content-between p-1">
          <h2 className="m-0 capitalize">{this.props.player.color}</h2>
          <span className={`bg-grey p-1 white badge ${this.props.current === this.props.player ? 'bg-blue' : 'bg-grey' }`}>Your turn</span>
        </div>
        <div className="graveyard">
        </div>
      </div>
    );
  }
};
