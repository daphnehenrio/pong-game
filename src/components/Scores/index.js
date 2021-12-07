/* eslint-disable no-underscore-dangle */
// ? Import npm
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// ? Import local
import { actionGetScores, actionChangePage } from '../../actions';
import './styles.scss';

// ? Composant
const Scores = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { scores } = useSelector((state) => state.game);

  const handleDisplayGame = () => {
    dispatch(actionChangePage('/', navigate));
  };

  useEffect(() => {
    dispatch(actionGetScores());
    console.log(scores);
  }, []);

  return (
    <div className="container">
      <h1>Score</h1>
      <button className="button" type="button" onClick={handleDisplayGame}>Game</button>
      <ul>
        {scores.map((score) => (
          <li key={score._id}>
            <span className="name">{score.name}</span>
            <span className="score">{score.score} point{score.score > 1 && 's'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ? Export
export default Scores;
