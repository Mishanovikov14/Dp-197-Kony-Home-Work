import ModelCart from "./model-cart.js";
import ViewCart from "./view-cart.js";

export default class ControllerCart {
    constructor({ subscribe, notify, events }) {
        this.view = new ViewCart();
        this.model = new ModelCart();

        // this.events = events;

        subscribe(events.INFO_CART, this.onCart);
    }

    onCart = data => {
        this.model.addToCart(data);
        // this.view.renderCount(this.model.list.length);
        this.view.renderCart(this.model.renderList, this.model.countSummary());
        // this.view.renderCartList(this.model.renderList, this.model.countSummary());
    }
}