import List from "./general/LIST";
const url = '/api/cart';

export default class Cart extends List {
    constructor(type = 'cart') {
        super(url, type)
        this.action = null;
        this.toggleCart = null;
    }

    async _init() {
        try {
            const data = await this._fetchData();
            this.items = data.items;
        } catch {
            this.error = err;
        } finally {
            this._initContainers();

            if (this.items.length) {
                this._render();
            };
        };
    }

    _initContainers() {
        this.container = document.querySelector('#cart-items');
        this.container.addEventListener('click', this._handleEvents.bind(this));
        this.action = document.querySelector('.action').addEventListener('click', this._action.bind(this));
        this.toggleCart = document.querySelector('#cart').addEventListener('click', this._toggleEvents.bind(this));
    }

    _toggleEvents(evt) {
        // const el = document.querySelector('.cart__content').style.display = 'block';

        // if (evt.target.parentNode.id === 'cart' || evt.target.parentNode.parentNoe.id === 'cart') {
        0
        // }

        // if (el) {
        //     document.querySelector('.cart__content').style.display = 'none';       
        // } else {
        //     document.querySelector('.cart__content').style.display = 'block';
        // };
    }

    async _handleEvents(evt) {
        const action = evt.target.classList;
        const find = this.items.find(cartItem => cartItem.id === evt.path[1].dataset.id);

        try {
            if (action.contains('item-delete')) {
                await this.changeItem(find.id, 'DELETE', 'delete');
            } else if (action.contains('right')) {
                await this.changeItem(find.id, 'PUT', 'plus');
            } else if (action.contains('left')) {
                await this.changeItem(find.id, 'PUT', 'minus');
            };

            this._render();
        } catch (err) {
            console.warn(err);
        } finally {
            this._render();
        };
    }

    async addItem(item) {
        const { id, imgUrl, name, price, totalPrice } = item;
        const find = this.items.find(cartItem => cartItem.id === id);

        if (!find) {
            let data = null;
            const newItem = { id, imgUrl, name, price, totalPrice, amount: 1 };
            try {
                data = await fetch(this.url, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newItem)
                });

                if (!data.error) {
                    this.items.push(newItem);
                    this._render();
                };
            } catch (err) {
                console.warn(err);
            };
        };
    }

    async changeItem(id, fetchMethod, operator) {
        const find = this.items.find(cartItem => cartItem.id === id);
        const putItem = { id: id, amount: find.amount, price: find.price, operator };
        let data = null;

        try {
            data = await fetch(this.url, {
                method: fetchMethod,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(putItem)
            });

            if (!data.error) {
                switch (operator) {
                    case 'plus':
                        {
                            find.amount++;
                            find.totalPrice += (+find.price);
                            break;
                        };
                    case "minus":
                        {
                            if (find.amount > 1) {
                                find.amount--;
                                find.totalPrice = find.totalPrice - find.price;
                            };
                            break;
                        };
                    default:
                        {
                            let index = this.items.indexOf(find);
                            this.items.splice(index, 1);
                        };
                };
            };
        } catch (err) {
            console.warn(err);
        };
    }

    _action(evt) {
        const { id } = evt.target;
        if (id === 'remove') {
            this.items = [];
            this._render();
        }
    }

    countPrice() {
        let totalPrice;

        totalPrice = this.items.reduce((acc, item) => {
            acc += (+item.totalPrice);
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