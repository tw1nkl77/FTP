// import "./css/style.scss";
// import BullsAndCows from "./components/bullsAndCows";

// const startPlay = new BullsAndCows();

// startPlay;

// document.querySelector('#move').onclick = () => startPlay.getWinner(startPlay.getComputerChoice());
// document.querySelector('#play').onclick = () => startPlay.startNewGame();

import BullsAndCows from "./components/BullsAndCows";
const startPlay = new BullsAndCows();
// startPlay;
document.querySelector('#move').onclick = () => startPlay.getWinner(startPlay.getComputerChoice());
document.querySelector('#play').onclick = () => startPlay.startNewGame();