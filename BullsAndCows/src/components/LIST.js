import Item from "./ITEMS";
import ITEMS from "./ITEMS";

export default class List extends Item {
    constructor() {
        this.inputChoice = null;
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
            const newChoice = new Item(item)
            accum += newChoice.template;
        })

        this.container.innerHTML = accum;
    }
}