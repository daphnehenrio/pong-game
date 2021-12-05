import * as GameActions from '../actions/game';

const initialState = {
  gameStart: false,
  gamePaused: false,
  players: [{
    id: 1,
    name: '',
    score: 0,
    racketPosition: 0,
    side: 'left',
  }, {
    id: 2,
    name: '',
    score: 0,
    racketPosition: 0,
    side: 'right',
  }],
  ball: {
    size: 10,
    maxSpeed: { x: 27, y: 14 },
    baseSpeed: { x: 5, y: 5 },
    xSpeed: 5,
    ySpeed: 5,
    xBounced: false,
    yBounced: false,
    stop: false,
  },
  racket: {
    racketMoveDistance: 10,
    height: 50,
  },
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case GameActions.SET_PLAYERS_NAME: {
      state.players.map((player) => {
        player.name = action[`player${player.id}`];
        return player;
      });
      return {
        ...state,
      };
    }
    case GameActions.MOVE_PLAYER_RACKET: {
      const { playerId, direction, maxHeight } = action;
      const allPlayers = state.players;
      const distanceToMove = state.racket.racketMoveDistance;

      const currentPlayer = allPlayers.find((player) => player.id === playerId);
      if (!currentPlayer) {
        console.error('No current player found');
        return null;
      }
      // Si la raquette est toute en haut, on ne peut pas monter plus
      if (direction === 'up' && currentPlayer.racketPosition > 0) {
        // On monte le plateau
        currentPlayer.racketPosition -= distanceToMove;
        // On vérifie qu’après mouvement ça ne débordera pas du court,
        // sinon on positionne tout en haut.
        if (currentPlayer.racketPosition < 0) {
          currentPlayer.racketPosition = 0;
        }
        allPlayers.map((player) => (player.id === playerId ? currentPlayer : player));
      }
      // Si la raquette est toute en bas - sa propre hauteur, on ne peut pas descendre plus
      else if (direction === 'down' && currentPlayer.racketPosition < (maxHeight - 50)) {
        // On descend le plateau
        currentPlayer.racketPosition += distanceToMove;
        // On vérifie qu’après mouvement ça ne débordera pas du court,
        // sinon on positionne tout en bas.
        if (currentPlayer.racketPosition > (maxHeight - 50)) {
          currentPlayer.racketPosition = maxHeight - 50;
        }
        allPlayers.map((player) => (player.id === playerId ? currentPlayer : player));
      }

      return {
        ...state,
        players: allPlayers,
      };
    }
    case GameActions.START_GAME: {
      return {
        ...state,
        gameStart: true,
      };
    }
    case GameActions.PAUSE_GAME: {
      // Toogle pause game
      return {
        ...state,
        gamePaused: !state.gamePaused,
      };
    }
    default:
      return state;
  }
}
