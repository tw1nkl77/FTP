import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import Description from "./components/DesProduct";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Chekout";

export default function(api) {
    const cart = new Cart(api);
    const catalog = new Catalog(cart, api);
    const menu = new Menu(api);
    const description = new Description(cart);
    const categories = new Categories(cart, api);
    const shoppingCart = new ShoppingCart(api);
    const checkout = new Checkout(api);
};