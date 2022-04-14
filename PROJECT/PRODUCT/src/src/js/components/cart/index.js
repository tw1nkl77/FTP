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
            }
        };
    },
    methods: {
        changeItem(id, value, price) {
            console.log(value, price)
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
                :api="api"/>
                <hr>
                <div class="action">
                    <div class="continue"><span><a href="cart.html"><b>Continue</b></a></span>
                    </div>
                    <div class="clear-all"><b><span id="remove">Remove all products</span></b></div>
                </div>
            </div>
        </div>    
    `
}