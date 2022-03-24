import List from "./general/LIST";
const url = 'https://raw.githubusercontent.com/schultznoan/FTP/main/fetchData/cart.json';

export default class Cart extends List {
    constructor(type = 'cart') {
        super(url, type);
    }

    _initContainers() {
        this.container = document.querySelector('#cart');
        if (!this.container) {
            return
        } else {
            this.container.addEventListener('click', this._handleEvents.bind(this));
        }
    }

    _handleEvents(evt) {
        // const action = evt.target.classList;
        // const find = this.items.find(cartItem => cartItem.id === evt.path[1].dataset.id);
        // const prices = this.prices.find(cartItem => cartItem.id === evt.path[1].dataset.id);

        // if (action.contains('item-delete')) {
        //     this.removeItem(find.id);
        // } else if (action.contains('right')) {
        //     find.amount++;
        //     find.price = (+find.price) + (+prices.price);
        // } else if (action.contains('left')) {
        //     if (find.amount > 1) {
        //         find.amount--;
        //         find.price = (+find.price) - (+prices.price);
        //     };
        // };

        // this._render();

        console.log(evt.target)
    }

    addItem(item) {
        const { name, price, imgUrl, id } = item;
        const find = this.items.find(cartItem => cartItem.id === id);

        if (!find) {
            this.items.push({
                name,
                price,
                id,
                imgUrl: imgUrl,
            });

            this.prices.push({
                id: id,
                price: price
            });
        };

        this._render();
    }

    // removeItem(id) {
    //     const find = this.items.find(item => item.id === id);
    //     let index = this.items.indexOf(find);
    //     this.items.splice(index, 1);

    //     this._render();
    // }

    // _action(evt) {
    //     const { id } = evt.target;
    //     if (id === 'remove') {
    //         this.items = [];
    //         this._render();
    //     }
    // }

    countPrice() {
        let totalPrice;

        totalPrice = this.items.reduce((acc, item) => {
            acc += (+item.price);
            return acc;
        }, 0);

        document.querySelectorAll('.cart-prices').forEach(item => item.innerHTML = `($${totalPrice})`);
    }

    countAmount() {
        let totalCount;

        totalCount = this.items.reduce((acc, item) => {
            acc += item.amount;
            return acc;
        }, 0);

        document.querySelectorAll('.cart-counter').forEach(item => item.innerHTML = `(${totalCount})`);
    }
};