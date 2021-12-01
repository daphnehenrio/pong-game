// == Import npm
import React from 'react';
import { useSelector } from 'react-redux';

// == Import
import Racket from '../Racket';
import './styles.scss';

// == Composant
const Court = () => {
  const players = useSelector((state) => state.game.players)


  return (
  <div className="court">
    <div className="middle"></div>
    {players.map(player =>  <Racket key={player.id} position={player.racketPosition} side={player.side}/>)}
  </div>
)};

// == Export
export default Court;
