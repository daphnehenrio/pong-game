// ? Import npm
import React from 'react';
import { useSelector } from 'react-redux';

// ? Import
import Header from '../Header';
import Court from '../Court';
import Form from '../Form';

// ? Import styles
import './styles.scss';

// ? Composant
const App = () => {
  const {
    players,
  } = useSelector((state) => state.game);

  // Vérifier s’il y a des joueurs enregistrer pour aficher formulaire
  const existingPlayers = !!players[0].name && players[1].name;

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
