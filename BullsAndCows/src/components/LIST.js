import ITEMS from "./ITEMS";
const choices = ITEMS;

export default class List extends Item {
    constructor() {
        this.container = null;
        this.items = [];
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
            accum += choices.template;
        })

        this.container.innerHTML = accum;
    }
}