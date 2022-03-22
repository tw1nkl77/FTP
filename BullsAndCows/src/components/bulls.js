import List from "./LIST";

export default class BullsAndCows extends List {
    constructor() {
        this.computerChoice = [];
        this.playerChoice = null;
        this.selectedNumbers = [];
        this.attempts = 10;
        this.play = true;
    }

    getPlayerChoice() {
        this.selectedNumbers.push({
            playerNumber: this.inputChoice.value,
        });

        return [...this.selectedNumbers[this.selectedNumbers.length - 1].playerNumber];
    }

    getRandom() {
        return Math.floor(Math.random() * 10);
    }

    getComputerChoice() {
        const res = [];

        while (res < 4) {
            let randomNumber = this.getRandom();

            if (!res.includes(randomNumber)) {
                res.push(randomNumber);
            };
        };

        this.computerChoice = res;
            
        return res;
    }

    checkValues(inputValue, hiddenValue) {
        let bulls = 0;
        let cows = 0;

        for (let i = 0; i < 4; i++) {
            if (hiddenValue[i] === +inputValue[i]) {
                bulls++
            } else if (hiddenValue.includes(+inputValue[i])) {
                cows++;
            };
        };

        this.items.push({
            choice: inputValue,
            bulls: bulls,
            cows: cows,
            left: (--this.attempts),
        });

        this._render();

        return bulls === 4;
    }

    getWinner(computerChoice) {
        let result = null;

        if (this.play) {
            if (this.attempts > 0) {
                this.playerChoice = this.getPlayerChoice();
                result = this.checkValues(this.playerChoice, computerChoice);

                if (result) {
                    this.play = false;
                    alert('Поздравляю! Вы победили.');
                };
            } else {
                this.play = false;
                alert(`К сожалению, вы проиграли! Загаданное число компьютером было ${computerChoice}`);
            };
        };
    }

    startNewGame() {
        this.container.innerHTML = '';
        this.playerChoice = [];
        this.computerChoice = [];
        this.history = [];
        this.attempts = 10;
        this.play = true;
    }
}