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
    baseSpeed: { x: 17, y: 5 },
    maxSpeed: { x: 27, y: 24 },
    xSpeed: 17,
    ySpeed: 5,
    xBounced: false,
    yBounced: false,
    stop: false,
    ballPosition: { x: 0, y: 0 },
  },
  racket: {
    racketMoveDistance: 35,
    height: 50,
  },
  scores: [],
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case GameActions.SET_PLAYERS_NAME: {
      // Set players’ name
      const players = state.players.map((player) => {
        player.name = action[`player${player.id}`];
        return player;
      });
      return {
        ...state,
        players,
      };
    }
    case GameActions.MOVE_PLAYER_RACKET: {
      // Update the racket position of players
      const { playerId, direction, maxHeight } = action;
      const allPlayers = state.players;
      const distanceToMove = state.racket.racketMoveDistance;

      const currentPlayer = allPlayers.find((player) => player.id === playerId);
      if (!currentPlayer) {
        console.error('No current player found');
        return null;
      }
      // If the racket is all the way up, you can't go any higher
      if (direction === 'up' && currentPlayer.racketPosition > 0) {
        // We set up the stage
        currentPlayer.racketPosition -= distanceToMove;
        // We check that after movement it will not overflow the court,
        // if not, we position everything on top.
        if (currentPlayer.racketPosition < 0) {
          currentPlayer.racketPosition = 0;
        }
        allPlayers.map((player) => (player.id === playerId ? currentPlayer : player));
      }
      // If the racket is all the way down less its own height, you can't go any lower
      else if (direction === 'down' && currentPlayer.racketPosition < (maxHeight - 50)) {
        // We descend the racket
        currentPlayer.racketPosition += distanceToMove;
        // We check that after movement it will not overflow the court,
        // if not, we position everything at the bottom.
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
      // Start the game
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
    case GameActions.UPDATE_BALL_SPEAD: {
      // update the x,y ball speed
      const { x, y } = action;
      return {
        ...state,
        ball: {
          ...state.ball,
          xSpeed: x,
          ySpeed: y,
        },
      };
    }
    case GameActions.UPDATE_BALL_POSITION: {
      // Update the x,y ball position
      const { x, y } = action;

      return {
        ...state,
        ball: {
          ...state.ball,
          ballPosition: {
            x,
            y,
          },
        },
      };
    }
    case GameActions.GET_SCORES: {
      console.log(action);
      return {
        ...state,
        scores: action.scores,
      };
    }
    case GameActions.UPDATE_SCORE: {
      // Add one point to the winner player
      const players = state.players.map((player) => {
        if (action.playerId === player.id) {
          player.score += 1;
        }
        return player;
      });
      return {
        ...state,
        players,
      };
    }
    default:
      return state;
  }
}
