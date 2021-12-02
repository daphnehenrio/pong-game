export const SET_PLAYERS_NAME = 'action/SET_PLAYERS_NAME';
export const MOVE_PLAYER_RACKET = 'action/MOVE_PLAYER_RACKET';

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
 * action ➔ Set players name in Store
 * @param {string} playerId - player id
 * @param {number} direction - "up" or "down"
 * @param {number} maxHeight - court height (la racket ne doit pas sortir du court)
 */
export const actionMovePlayerRacket = (playerId, direction, maxHeight) => ({
  type: MOVE_PLAYER_RACKET,
  playerId,
  direction,
  maxHeight,
});
