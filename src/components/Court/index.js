// ? Import npm
import React, { useRef, useLayoutEffect, useState } from "react";
import { useSelector } from 'react-redux';

// ? Import
import Racket from '../Racket';
import Ball from '../Ball';
import './styles.scss';

// ? Composant
const Court = () => {
  // Récupération des joueurs pour générer leur raquette
  const players = useSelector((state) => state.game.players)

  // Calcul de la dimension du court en pixel responsive (si on agrrandi ou réduit la fenêtre) pour le placement de la balle
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });
  
  useLayoutEffect(() => {
    function updateSize() {
      if (targetRef.current) {
        setDimensions({
          width: targetRef.current.offsetWidth,
          height: targetRef.current.offsetHeight
        });
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
  <div className="court" ref={targetRef}>
    <div className="middle"></div>
    {players.map(player =>  <Racket key={player.id} position={player.racketPosition} side={player.side}/>)}
    <Ball courtDimension={dimensions}/>
  </div>
)};

// ? Export
export default Court;
