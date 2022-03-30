// import List from "./general/LIST";
// const url = '/api/cart';
import Cart from "./Cart";

export default class ShoppingCart extends Cart {
    constructor(type = 'shoppingCart') {
        // super(url, type);
        super(type);
    }

    _initContainers() {
        this.container = document.querySelector('#shoppingCart');

        if (this.container) {
            this.container.addEventListener('click', this._handleEvents.bind(this));
        };
    }
};