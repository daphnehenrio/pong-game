// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Racket = ({ position, side }) => (
  <div className="racket"
    style={{
      position: 'absolute',
      left: side === 'left' ? 0 : undefined,
      right: side === 'right' ? 0 : undefined,
      top: position,
    }}
  >
  </div>
);

// == Export
export default Racket;
