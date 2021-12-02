// ? Import npm
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// ? Import actions
import { actionStartGame } from '../../actions';

// ? Import
import './styles.scss';

// ? Composant

const Player = ({ player }) => {
  const { name, score } = player;
  return (
    <div className="player">
      <div className="name">{name}</div>
      <div className="score">Score: {score}</div>
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();

  const {
    players,
    gameStart,
  } = useSelector((state) => state.game);

  // Vérifier s’il y a des joueurs enregistrer pour aficher nom et score
  const existingPlayers = players[0].name && players[1].name;

  const handleStart = () => {
    dispatch(actionStartGame());
  };
  return (
    <div className="header">
      <h1>Pong Game</h1>
      <div className="players">
        {existingPlayers && players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      {!gameStart && (
        <button
          type="button"
          onClick={handleStart}
        >Start
        </button>
      )}
    </div>
  );
};

// ? Export
export default Header;

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};
