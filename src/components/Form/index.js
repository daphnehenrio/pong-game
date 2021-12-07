/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import npm
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

// ? Import local
import { actionSetPlayersName } from '../../actions';
import './styles.scss';

// ? Composant
const Form = ({ isOpen }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const player1Name = e.target.player1.value;
    const player2Name = e.target.player2.value;
    const keyboard = e.target.keyboard.value;

    // Set players’ name in reducer
    dispatch(actionSetPlayersName(player1Name, player2Name, keyboard));

    // Clean input
    e.target.player1.value = '';
    e.target.player2.value = '';
    e.target.keyboard.value = '';
  };

  return (
    <ReactModal
      isOpen={isOpen}
      class="modal"
      ariaHideApp={false}
      contentLabel="Choose player name"
    >
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="player1" className="name" id="player1" required placeholder="Nom joueur 1" />
        <input type="text" name="player2" className="name" id="player2" required placeholder="Nom joueur 2" />
        <label htmlFor="keyboard">Layout clavier:</label>
        <select name="keybord" id="keyboard">
          <option value="azerty" default>AZERTY</option>
          <option value="qwerty">QWERTY</option>
          <option value="bepo">BÉPOÈ</option>
        </select>
        <button type="submit">Valider</button>
      </form>
    </ReactModal>
  );
};

// ? Export
export default Form;

Form.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
