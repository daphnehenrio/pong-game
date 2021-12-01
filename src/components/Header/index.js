// == Import npm
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';


// == Composant
const Header = () => {
  const {
    players,
  } = useSelector((state) => state.game);


  const Player = ({player}) => {
    const {name, score } = player;
    return (
      <div className="player">
        <div className="name">{name}</div>
        <div className="score">Score: {score}</div>
      </div>
    )
  }

  return (
    <div className="header">
      <h1>Pong Game</h1>
      <div className="players">
        {players.map((player) => (
            <Player key={player.id} player={player}/>
          ))}
      </div>
    </div>
  );
}



// == Export
export default Header;
