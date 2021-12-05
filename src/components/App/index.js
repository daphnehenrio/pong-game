// ? Import npm
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ? Import
import Header from '../Header';
import Court from '../Court';
import Form from '../Form';

// ? Import actions
import { actionPauseGame } from '../../actions';

// ? Import styles
import './styles.scss';

// ? Composant
const App = () => {
  const dispatch = useDispatch();
  const {
    players,
  } = useSelector((state) => state.game);

  // Vérifier s’il y a des joueurs enregistrer pour aficher formulaire
  const existingPlayers = !!players[0].name && players[1].name;

  const handleKeyPress = (evt) => {
    const key = evt.keyCode || evt.which;

    if (key === 32) {
      dispatch(actionPauseGame());
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);

    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <div className="app">
      <Header />
      <Court formIsOpen={!existingPlayers} />
      { !existingPlayers && <Form isOpen={!existingPlayers} />}
    </div>
  );
};

// ? Export
export default App;
