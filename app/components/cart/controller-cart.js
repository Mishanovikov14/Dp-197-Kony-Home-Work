import ModelCart from "./model-cart.js";
import ViewCart from "./view-cart.js";

export default class ControllerCart {
    constructor({ subscribe, events }) {
        this.view = new ViewCart(this.onMinus, this.onPlus, this.onDelete);
        this.model = new ModelCart();

        this.events = events;

        subscribe(events.INFO_CART, this.initCart);
    }

    initCart = data => {
        this.model.addProductToModel(data);
        this.model.addToCart();
        this.view.renderCount(this.model.list.length);
        this.view.renderCart();
        this.view.renderList(this.model.renderList, this.model.countSummary());
    }

    render = () => {
        this.model.addToCart();
        this.model.addToCart();
        this.view.renderCount(this.model.list.length);
        this.view.renderList(this.model.renderList, this.model.countSummary());
        if (this.model.list < 1) this.view.renderEmptyCart();
    }

    onMinus = e => {
        if (e.target.dataset.minus) {
            this.model.substrAmount(e.target.dataset.minus);
            this.render();
        } 
    }

    onPlus = e => {
        if (e.target.dataset.plus) {
            this.model.addAmount(e.target.dataset.plus);
            this.render();
        }
    }

    onDelete = e => {
        if (e.target.dataset.delete) {
            this.model.deleteProd(e.target.dataset.delete);
            this.render();
        }
    }
}