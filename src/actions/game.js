export const SET_PLAYERS_NAME = 'action/SET_PLAYERS_NAME';

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
