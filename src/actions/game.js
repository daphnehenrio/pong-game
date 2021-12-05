export const SET_PLAYERS_NAME = 'action/SET_PLAYERS_NAME';
export const MOVE_PLAYER_RACKET = 'action/MOVE_PLAYER_RACKET';
export const START_GAME = 'action/START_GAME';
export const PAUSE_GAME = 'action/PAUSE_GAME';
export const UPDATE_BALL_SPEAD = 'action/UPDATE_BALL_SPEAD';
export const UPDATE_BALL_POSITION = 'action/UPDATE_BALL_POSITION';
export const UPDATE_SCORE = 'action/UPDATE_SCORE';

/**
 * action ➔ Set players name in Store
 * @param {string} player1 - player1's name
 * @param {string} player2 - player2's name
 */
export const actionSetPlayersName = (player1, player2) => ({
  type: SET_PLAYERS_NAME,
  player1,
  player2,
});

/**
 * action ➔ Move players racket
 * @param {number} playerId - player id
 * @param {string} direction - "up" or "down"
 * @param {number} maxHeight - court height (la racket ne doit pas sortir du court)
 */
export const actionMovePlayerRacket = (playerId, direction, maxHeight) => ({
  type: MOVE_PLAYER_RACKET,
  playerId,
  direction,
  maxHeight,
});

/**
 * action ➔ Start Game
 */
export const actionStartGame = () => ({
  type: START_GAME,
});

/**
 * action ➔ Pause Game
 */
export const actionPauseGame = () => ({
  type: PAUSE_GAME,
});

/**
 * action ➔ SetBallSpeed
 * @param {number} x - ballSpead x
 * @param {number} y - ballSpead y
 */
export const actionUpdateBallSpead = (x, y) => ({
  type: UPDATE_BALL_SPEAD,
  x,
  y,
});

/**
 * action ➔ SetBallPosition
 * @param {number} x - ballPosition x
 * @param {number} y - ballPosition y
 */
export const actionUpdateBallPosition = (x, y) => ({
  type: UPDATE_BALL_POSITION,
  x,
  y,
});

/**
 * action ➔ Update player score
 * @param {number} playerId - playerId
 */
export const actionUpdateScore = (playerId) => ({
  type: UPDATE_SCORE,
  playerId,
});
