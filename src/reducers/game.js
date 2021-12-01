// import * as GameActions from 'actions/game';

const initialState = {
  players: [{
    id: 1,
    name: "Joueur 1",
    score: 0,
  },{
    id: 2,
    name: "Joueur 2",
    score: 0,
  }],
};


export default function game(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
};
