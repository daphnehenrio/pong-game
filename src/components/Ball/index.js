// ? Import npm
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// ? Import actions
// import { actionUpdateBallSpead } from '../../actions';

// ? Import
import './styles.scss';

// ? Composant
const Ball = ({ courtDimension }) => {
  // const dispatch = useDispatch();
  const {
    size,
    xSpeed,
    ySpeed,
    // baseSpeed,
  } = useSelector((state) => state.game.ball);
  const { gameStart } = useSelector((state) => state.game);

  // Calcul de la position de la balle initial
  // centré en fonction de la hauteur et largeur du court

  const [ballPosition, setBallPosition] = useState({
    x: (courtDimension.width / 2) - (size / 2),
    y: (courtDimension.height / 2) - (size / 2),
  });

  // const setInitialBallPosition = () => {
  //   setBallPosition({
  //     x: (courtDimension.width / 2) - (size / 2),
  //     y: (courtDimension.height / 2) - (size / 2),
  //   });
  // };

  // const ballReset = () => {
  //  dispatch(actionUpdateBallSpead(baseSpeed.x, baseSpeed.y));
  //  setInitialBallPosition();
  // };

  const handleMovement = () => {
    setBallPosition({
      x: ballPosition.x + xSpeed,
      y: ballPosition.y + ySpeed,
    });

  /* if ((ballPosition.x > courtDimension.width) || (ballPosition.x <= 0)) {
      console.log(ballPosition, courtDimension);
      setBallPosition({
        x: ballPosition.x - xSpeed,
        y: ballPosition.y,
      });
      dispatch(actionUpdateBallSpead(baseSpeed.x + 1, baseSpeed.y));
    } */
  };

  if (gameStart) {
    setInterval(() => handleMovement(), 1000);
  }

  useEffect(() => {
    if (!gameStart) {
      setBallPosition({
        x: (courtDimension.width / 2) - (size / 2),
        y: (courtDimension.height / 2) - (size / 2),
      });
    }
  }, [courtDimension, gameStart]);

  return (
    <div
      className="ball"
      style={{
        position: 'absolute',
        top: `${ballPosition.y}px`,
        left: `${ballPosition.x}px`,
        height: `${size}px`,
        width: `${size}px`,
      }}
    />
  );
};

// ? Export
export default Ball;

Ball.propTypes = {
  courtDimension: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};
