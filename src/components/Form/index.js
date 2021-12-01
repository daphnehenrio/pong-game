// == Import npm
import React from 'react';
import { useDispatch } from 'react-redux';
import ReactModal from 'react-modal';

// == Import local
import { actionSetPlayersName } from '../../actions'
import './styles.scss';

// == Composant
const Form = (isOpen) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const player1Name = e.target.player1.value;
    const player2Name = e.target.player2.value;

    dispatch(actionSetPlayersName(player1Name, player2Name));

    e.target.player1.value = "";
    e.target.player2.value = "";
    
  }

  return (
    <ReactModal isOpen={isOpen} class="modal">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="player1" className="name" id="player1" required placeholder="Nom joueur 1"/>
        <input type="text" name="player2" className="name" id="player2" required placeholder="Nom joueur 2"/>
        <button type="submit">Valider</button>
      </form>
    </ReactModal>
  );
}


// == Export
export default Form;
