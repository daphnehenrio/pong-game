// ? Import npm
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ? Import components
import Header from '../Header';
import Court from '../Court';
import Form from '../Form';

// ? Import actions
import { actionPauseGame } from '../../actions';

// ? Composant

const Home = () => {
  const dispatch = useDispatch();
  const {
    players,
    gameStarted,
    gameEnded,
  } = useSelector((state) => state.game);

  // Check if there are players registered to display form
  const existingPlayers = !!players[0].name && players[1].name;

  // Handler to pause the game by space key press
  const handleKeyPress = (evt) => {
    const key = evt.keyCode || evt.which;

    if (key === 32) {
      dispatch(actionPauseGame());
    }
  };
  useEffect(() => {
    // Add listener on space bar if game is running to toggle the pause game
    if (gameStarted && !gameEnded) {
      window.addEventListener('keypress', handleKeyPress);
    }

    // clean listener
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [gameStarted, gameEnded]);
  return (
    <>
      <Header />
      <Court formIsOpen={!existingPlayers} />
      { !existingPlayers && <Form isOpen={!existingPlayers} />}
    </>
  );
};

// ? Export
export default Home;
