import './style.css';
import item from "../items"

export default {
    name: 'cart',
    components: { item },
    data() {
        return {
            items: [],
            openCart: false,
            cartIcon: 'https://raw.githack.com/SergioElCringe/JS_step_1/main/students/Eminov/Project/Eminov-hw-8/src/assets/img/backet.svg',
            api: {
                productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
                url: '/api/cart'
            },
            actions: {
                changeItem: this.changeItem,
                addItem: this.addItem
            }
        };
    },
    methods: {
        async addItem(item) {
            console.log(item)
            // const { id, imgUrl, name, price, totalPrice, amount = 1 } = item;
            // const find = this.items.find(item => item.id === id);
    
            // if (!find) {
            //     const newItem = { id, imgUrl, name, price, totalPrice, amount };
            //     try {
            //         const data = await this.$api.send(this.url, 'POST', newItem);
    
            //         if (!data.error) {
            //             this.items.push(newItem);
            //         };
            //     } catch (err) {
            //         console.warn(err);
            //     };
            // };
        },

        async changeItem(item, value, price) {
            try {
                const data = await this.$api.send(this.api.url + `/${item.id}`, 'PUT', { value, price });
    
                if (!data.error) {
                    if (value == -1 && find.amount == 1) {
                        await this.deleteItem(item.id);
                    } else {
                        item.amount += value;
                        item.totalPrice += price;
                    };
                };
            } catch (err) {
                console.warn(err);
            };
        }
    },
    async created() {
        try {
            const data = await this.$api.send(this.api.url, 'GET');
            this.items = data.items;
        } catch (err) {
            console.warn(err);
        };
    },

    template: `
        <div class="shopping_cart">
            <button @click="openCart = !openCart">
                <img :src="cartIcon" height="20px" width="20px">
                <div>Cart
                    <span class="cart-counter">(0)</span>
                    <span class="cart-prices">$0</span>
                </div>
            </button>
            <div class="cart__content" v-show="openCart">
                <item :type="'cart'"
                v-for="item of items"
                :key="item.id"
                :item="item"
                :api="api"
                :actions="actions"/>
                <hr>
                <div class="action">
                    <div class="continue">
                        <span>
                            <a href="cart.html"><b>Continue</b></a>
                        </span>
                    </div>
                    <div class="clear-all">
                        <span id="remove"><b>Remove all products</b></span>
                    </div>
                </div>
            </div>
        </div>    
    `
}