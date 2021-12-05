// Todo: Add settings to switch keybord in game
const bepoEnable = true; // specific keyboard layout
const qwertyEnable = false; // specific keyboard layout

let player2Up = 65; // a
let player2Down = 79; // o

if (bepoEnable) {
  player2Up = 87; // é
  player2Down = 85; // u
}

if (qwertyEnable) {
  player2Up = 87; // w
  player2Down = 83; // s
}

export default {
  // key codes list
  player1: {
    up: 38, // ⬆️
    down: 40, // ⬇️
  },
  player2: {
    up: player2Up,
    down: player2Down,
  },
};
