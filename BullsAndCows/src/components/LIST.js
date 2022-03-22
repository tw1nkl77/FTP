import getItem from "./ITEMS";

export default class List {
    constructor() {
        this.inputChoice = null;
        this.container = null;
        this.items = [];
        this._init();
    }

    _init() {
        this._initContainers();
        this._render();
    }

    _initContainers() {
        this.container = document.querySelector('#result-attempt');
        this.inputChoice = document.querySelector('#inputChoice');
    }

    _render() {
        let accum = '';

        this.items.forEach(item => {
            const newChoice = getItem(item)
            accum += newChoice;
            console.log(accum)
        })

        this.container.innerHTML = accum;
    }
}