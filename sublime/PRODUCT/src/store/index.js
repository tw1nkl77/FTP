import { createStore } from 'vuex';
import Catalog from './modules/catalog';
import Cart from './modules/cart';
import Menu from './modules/menu';
import ShippingMethods from './modules/shippingMethods';
import Contact from './modules/contact';
import Pagination from './modules/pagination';

export default createStore({
    modules: { 
        Catalog, 
        Cart, 
        Menu, 
        ShippingMethods,
        Contact,
        Pagination,
    },
});