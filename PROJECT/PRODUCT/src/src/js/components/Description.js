import Item from "./general/LIST_ITEM";
import Categories from "./Categories";
const url = '/api/description';

export default class Description extends Categories {
    constructor(cart, api, type = 'description') {
        super(cart, api, type);
        this.amount = 1;
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
                            imgUrl: localProduct.imgUrl,
                            id: localProduct.id,
                            name: localProduct.name,
                            price: localProduct.price,
                            amount: localProduct.amount,
                            images: find.images
                        });
                    };
                };
            } catch (err) {
                console.warn(err);
            } finally {
                if (this.items.length > 0) {
                    this._render();
                };
            };
        };
    }

    _initContainers() {
        this.container = document.querySelector('#des-prod');

        if (this.container) {
            this.container.addEventListener('click', this._handleEvents.bind(this));
        };
    }

    _handleEvents(evt) {
        const { name, price, imgurl, id } = evt.path[3].dataset;

        if (evt.target.classList.contains('right')) {
            this.amount += 1;
            document.querySelector('#quantity_input').value = this.amount;
        } else if (evt.target.classList.contains('left')) {
            if (this.amount > 1) {
                document.querySelector('#quantity_input').value = --this.amount;
            };
        };

        const product = {
            name: name,
            price: Number(price),
            imgUrl: imgurl,
            id: id,
            totalPrice: Number(price * this.amount),
            amount: this.amount
        };

        if (evt.target.classList.contains('button-add')) {
            this.cart.addItem(product);
        };

        if (evt.path[1].dataset.image) {
            const { image } = evt.path[1].dataset;
            this._carousel(image)
        };
    }

    _carousel(img) {
        const carousel = document.querySelector('.details_image_large');
        const url = 'https://raw.githubusercontent.com/schultznoan/FTP/main/fetchData/img';
        carousel.innerHTML = `<img src="${url + img}">`
    }
}