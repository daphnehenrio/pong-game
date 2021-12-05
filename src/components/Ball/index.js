// ? Import npm
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// ? Import actions
import {
  actionUpdateBallSpead,
  actionUpdateBallPosition,
  actionUpdateScore,
} from '../../actions';

// ? Import
import './styles.scss';

// ? Composant
const Ball = ({ courtDimension }) => {
  const dispatch = useDispatch();
  const {
    gameStart,
    gamePaused,
    players,
    racket,
    ball,
  } = useSelector((state) => state.game);

  const {
    size,
    xSpeed,
    ySpeed,
    ballPosition,
    maxSpeed,
    baseSpeed,
  } = ball;

  // Reinitialization ball position
  const ballReset = () => {
    // We position the ball in the center of the board
    const x = (courtDimension.width / 2) - (size / 2);
    const y = (courtDimension.height / 2) - (size / 2);
    dispatch(actionUpdateBallPosition(x, y));
  };

  const ballSpeedReset = () => {
    // If current speed is positive, set negative baseSpeed, else, set positive baseSpeed
    const newXSpeed = xSpeed > 0 ? -baseSpeed.x : baseSpeed.x;
    const newYspeedY = ySpeed > 0 ? -baseSpeed.y : baseSpeed.y;

    dispatch(actionUpdateBallSpead(newXSpeed, newYspeedY));
  };

  // Movement of the ball
  const handleMovement = () => {
    if (!gamePaused && gameStart) {
      // Define the ball position in the court without overflow
      let xPosition = ballPosition.x + xSpeed;
      let yPosition = ballPosition.y + ySpeed;

      // If the ball is further than the width of the court - the width of the ball
      // Or if the ball is before the start of the pitch
      if (ballPosition.x + xSpeed > (courtDimension.width - size) || ballPosition.x + xSpeed < 0) {
        // If the ball is further than the width of the court - the width of the ball
        xPosition = ballPosition.x + xSpeed > (courtDimension.width - size)
          // We stop the ball at the right edge of the court - its own width
          ? courtDimension.width - size
          // Otherwise it is that it is all to the left of the court
          : 0;
      }

      // If the ball is lower than the height of the court - the width of the ball - its size
      // Or if the ball is before the beginning (top) of the court
      if (ballPosition.y + ySpeed > courtDimension.height - size || ballPosition.y + ySpeed < 0) {
        // If the ball is lower than the height of the court - the width of the ball - its size
        yPosition = ballPosition.y + ySpeed > courtDimension.height - size
          // We stop the ball at the bottom of the court - its own height
          ? courtDimension.height - size
          // If not, it is at the top of the court
          : 0;
      }

      // Update ball position in reducer ce qui va set l’animation et déplacer la balle visuellement
      dispatch(actionUpdateBallPosition(xPosition, yPosition));

      // Set direction
      // If the ball touches one of the left or right edges, we make it go in the other direction
      // And we accelerate its speed x without exceeding the max speed
      if ((ballPosition.x + xSpeed > courtDimension.width - size)
          || (ballPosition.x + xSpeed <= 0)) {
        let newXSpeed;
        if (xSpeed < maxSpeed.x) {
          newXSpeed = xSpeed < 0
            ? xSpeed - 2
            : xSpeed + 2;
        }
        else {
          newXSpeed = xSpeed < 0
            ? -maxSpeed.x
            : maxSpeed.x;
        }
        dispatch(actionUpdateBallSpead(-newXSpeed, ySpeed));
      }

      // If the ball touches one of the high or low edges, we make it go the other way
      // And we accelerate its speed y without exceeding the maximum speed
      if ((ballPosition.y + ySpeed > courtDimension.height - size)
          || (ballPosition.y + ySpeed <= 0)) {
        let newYSpeed;
        if (ySpeed < maxSpeed.y) {
          newYSpeed = ySpeed < 0
            ? ySpeed - 2
            : ySpeed + 2;
        }
        else {
          newYSpeed = ySpeed < 0
            ? -maxSpeed.y
            : maxSpeed.y;
        }
        dispatch(actionUpdateBallSpead(xSpeed, -newYSpeed));
      }

      // If the ball touches the right edge of the court, without touching the racket of player 2
      // We update the score, and reset the position of the ball in the center
      if (
        ballPosition.x + xSpeed > courtDimension.width - size
          && (
            ballPosition.y + ySpeed + size < players[1].racketPosition
            || ballPosition.y + ySpeed > players[1].racketPosition + racket.height
          )
      ) {
        dispatch(actionUpdateScore(players[0].id));
        // Reset ball speed
        ballSpeedReset();
        // reset ball position
        ballReset();
      }
      // If the ball touches the left edge of the court, without touching the racket of player 1
      // We update the score, and reset the position of the ball in the center
      else if (
        ballPosition.x + xSpeed <= 0
          && (
            ballPosition.y + ySpeed + size < players[0].racketPosition
            || ballPosition.y + ySpeed > players[0].racketPosition + racket.height
          )
      ) {
        dispatch(actionUpdateScore(players[1].id));
        ballReset();
      }
    }
  };

  useEffect(() => {
    // Recenter the ball if you resize the game window
    // before starting the game
    if (!gameStart) {
      ballReset();
    }
  }, [courtDimension, gameStart]);

  useEffect(
    () => {
      // Loop movement of the ball
      const loop = setTimeout(() => handleMovement(), 100);

      return () => {
        clearTimeout(loop);
      };
    },
    [ballPosition, gameStart, gamePaused],
  );

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
