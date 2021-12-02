// ? Import npm
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// ? Import
import './styles.scss';

// ? Composant
const Racket = ({ position, side }) => {
  const { height } = useSelector((state) => state.game.racket);

  return (
    <div
      className="racket"
      style={{
        position: 'absolute',
        height: `${height}px`,
        left: side === 'left' ? 0 : undefined,
        right: side === 'right' ? 0 : undefined,
        top: position,
      }}
    />
  );
};

// ? Export
export default Racket;

Racket.propTypes = {
  position: PropTypes.number.isRequired,
  side: PropTypes.string.isRequired,
};
