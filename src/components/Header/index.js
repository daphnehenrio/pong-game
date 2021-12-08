// ? Import npm
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

// ? Import constants
import keycodes from '../../constants/gameKeys';

// ? Import actions
import { actionStartGame, actionChangePage } from '../../actions';

// ? Import styles
import './styles.scss';

// ? Composant

// One player component to display Name & score
const Player = ({ player, keyboard }) => {
  const { name, score, id } = player;
  console.log(player);
  return (
    <div className="player">
      <div className="name">{name}</div>
      <div className="score">Score: {score}</div>
      <div className="content">
        <div className="commands">up : {keycodes[keyboard][`player${id}`].upLetter}</div>
        <div className="commands">down : {keycodes[keyboard][`player${id}`].downLetter}</div>
      </div>
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    players,
    gameStarted,
    keyboardLayout,
  } = useSelector((state) => state.game);

  // Check if there are players registered to display name and score
  const existingPlayers = players[0].name && players[1].name;

  // Start game function
  const handleStart = () => {
    dispatch(actionStartGame());
  };

  // Go to scores page
  const handleDisplayScores = () => {
    dispatch(actionChangePage('/scores', navigate));
  };

  return (
    <div className="header">
      <h1>Pong Game</h1>
      <div className="players">
        {existingPlayers && keyboardLayout && players.map((player) => (
          <Player key={player.id} player={player} keyboard={keyboardLayout} />
        ))}
      </div>
      {!gameStarted && existingPlayers && (
      <button
        className="start"
        type="button"
        onClick={handleStart}
      >Start Game
      </button>
      )}
      {!gameStarted && (
        <button
          className="scores"
          type="button"
          onClick={handleDisplayScores}
        >Tous les scores
        </button>
      )}
      {gameStarted && (
        <div className="command-pause">
          Pause : barre espace
        </div>
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
    id: PropTypes.number.isRequired,
  }).isRequired,
  keyboard: PropTypes.string.isRequired,
};
