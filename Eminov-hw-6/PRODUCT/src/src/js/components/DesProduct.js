import Item from "./general/LIST_ITEM";
const url = '/api/description';

export default class Description {
    constructor(cart, api, type = 'description') {
        this.container = null;
        this.items = [];
        this.type = type;
        this.cart = cart;
        this.request = api;
        this._init();
    }

    _initContainers() {
        this.container = document.querySelector('#des-prod');
    }

    async _init() {
        this._initContainers();
        if (this.container) {
            const localProduct = JSON.parse(localStorage.product);
            
            try {
                const data = await this.request.send(url, 'GET');
                if (!data.error) {
                    const find = data.find(item => item.id == localProduct.id);
                    if (find) {
                        this.items.push({
                            id: localProduct.id,
                            name: localProduct.name,
                            price: localProduct.price,
                            images: find.images    
                        });
                        this._render();
                    };
                };
            } catch (err) {
                console.warn(err);
            };
        };
    }

    _render() {
        if (this.container) {
            let accum = '';

            this.items.forEach(item => {
                const newItem = new Item(item, this.type);
                accum += newItem.template;
            })
            this.container.innerHTML = accum;
        };
    }
}