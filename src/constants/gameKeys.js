const bepoEnable = true;
export default {
  // key codes list
  player1: {
    up: 38, // ⬆️
    down: 40, // ⬇️
  },
  player2: {
    up: bepoEnable ? 87 : 65, // BÉPO: é / AZERTY: a
    down: bepoEnable ? 85 : 79, // BÉPO: u / AZERTY: o
  },
};
