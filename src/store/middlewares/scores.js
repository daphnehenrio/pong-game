/* eslint-disable camelcase */

import axios from 'axios';
import { base_url } from 'src/constants/axios';
import { GET_SCORES, UPDATE_SCORE, CHANGE_PAGE } from 'src/actions/game';

// eslint-disable-next-line no-unused-vars
export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- GET SCORES ----------------------------
    case GET_SCORES: {
      axios
        .get(
          `${base_url}/scores`,
          {
            'Content-Type': 'application/json',
          },
        )
        .then((res) => {
          console.log(res);
          action.scores = res.data;
          next(action);
        })
        .catch((err) => {
          console.error(err);
          next(action);
        });
      break;
    }
    // ---------------------------- UPDATE SCORES ----------------------------
    case UPDATE_SCORE: {
      const { players } = store.getState().game;
      const winnerPlayer = players.find((player) => player.id === action.playerId);

      const data = {
        name: winnerPlayer.name,
        score: 1,
      };

      axios
        .post(
          `${base_url}/scores?name=${data.name}&score=${data.score}`,
        )
        .then((res) => {
          console.log(res);
          next(action);
        })
        .catch((err) => {
          console.error(err);
          next(action);
        });
      break;
    }
    case CHANGE_PAGE: {
      action.navigate(action.route);
      break;
    }
    // ---------------------------- DEFAULT ----------------------------
    default: {
      next(action);
    }
  }
};
