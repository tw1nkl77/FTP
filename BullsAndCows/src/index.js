// import "./css/style.scss";
// import BullsAndCows from "./components/bullsAndCows";

// const startPlay = new BullsAndCows();

// startPlay;

// document.querySelector('#move').onclick = () => startPlay.getWinner(startPlay.getComputerChoice());
// document.querySelector('#play').onclick = () => startPlay.startNewGame();
const products = [];
import BullsAndCows from "./components/bulls";
const startPlay = new BullsAndCows(products);
startPlay;
document.querySelector('#move').onclick = () => startPlay.getWinner(startPlay.getComputerChoice());
document.querySelector('#play').onclick = () => startPlay.startNewGame();
