// ? Import npm
import React, {
  useRef,
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// ? Import components
import Racket from '../Racket';
import Ball from '../Ball';

// ? Import actions
import { actionMovePlayerRacket } from '../../actions';

// ? Import constants
import keyCodes from '../../constants/gameKeys';

// ? Import styles
import './styles.scss';

// ? Composant
const Court = ({ formIsOpen }) => {
  const dispatch = useDispatch();

  // Retrieval of players to generate their racket
  const players = useSelector((state) => state.game.players);

  // Calculation of the size of the court in responsive pixels
  // (if we enlarge or reduce the window) for the ball placement
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    // Listener for screen resize
    function updateSize() {
      if (targetRef.current) {
        setDimensions({
          width: targetRef.current.offsetWidth,
          height: targetRef.current.offsetHeight,
        });
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // FIXME: ANTI JEU, si un des joueur appuis sur une touche
  // FIXME: ça coupe le mouvement de l’autre joueur …
  // Movement of the player’s rackets
  const handleKeyDown = useCallback((evt) => {
    const key = evt.keyCode || evt.which;
    const { player1, player2 } = keyCodes;

    if (key === player1.up) {
      dispatch(actionMovePlayerRacket(1, 'up', dimensions.height));
    }
    if (key === player1.down) {
      dispatch(actionMovePlayerRacket(1, 'down', dimensions.height));
    }
    if (key === player2.up) {
      dispatch(actionMovePlayerRacket(2, 'up', dimensions.height));
    }
    if (key === player2.down) {
      dispatch(actionMovePlayerRacket(2, 'down', dimensions.height));
    }
  });

  useEffect(() => {
    // Listener for keydown
    if (!formIsOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="court" ref={targetRef}>
      {!formIsOpen && (
        <>
          {players.map((player) => (
            <Racket
              key={player.id}
              position={player.racketPosition}
              side={player.side}
            />
          ))}
          <Ball courtDimension={dimensions} />
        </>
      )}
      <div className="middle" />
    </div>
  );
};

// ? Export
export default Court;

Court.propTypes = {
  formIsOpen: PropTypes.bool.isRequired,
};
