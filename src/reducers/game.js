import * as GameActions from '../actions/game';

const initialState = {
  players: [{
    id: 1,
    name: "",
    score: 0,
    racketPosition: 0,
    side: "left",
  },{
    id: 2,
    name: "",
    score: 0,
    racketPosition: 0,
    side: "right",
  }],
};


export default function game(state = initialState, action) {
  switch(action.type) {
    case GameActions.SET_PLAYERS_NAME: {
      state.players.map(player => {
        player.name = action[`player${player.id}`]
        return player;
      })
      return {
        ...state,
      }
    }
    default:
      return state;
  }
};
