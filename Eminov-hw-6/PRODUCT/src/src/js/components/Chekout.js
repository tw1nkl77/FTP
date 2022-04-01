import ShoppingCart from "./ShoppingCart";

export default class Checkout extends ShoppingCart {
    constructor(api, type = 'checkout') {
        super(api, type);
    }

    _initContainers() {
        this.container = document.querySelector('#list-products');
    }
}