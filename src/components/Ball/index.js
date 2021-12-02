// ? Import npm
import React from 'react';
import PropTypes from 'prop-types';

// ? Import
import './styles.scss';

// ? Composant
const Ball = ({ courtDimension }) => {
  // Calcul de la position de la balle initial
  // centré en fonction de la hauteur et largeur du court
  const ballPositionY = (courtDimension.height / 2) - 5;
  const ballPositionX = (courtDimension.width / 2) - 5;

  return (
    <div
      className="ball"
      style={{
        position: 'absolute',
        top: `${ballPositionY}px`,
        left: `${ballPositionX}px`,
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
