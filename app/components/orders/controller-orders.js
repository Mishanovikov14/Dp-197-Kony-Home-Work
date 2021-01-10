import ModelOrders from "./model-orders.js";
import ViewOrders from "./view-orders.js";

export default class ControllerOrders {
    constructor({subscribe, notify, events}) {
        this.view = new ViewOrders(this.onSubmit);
        this.model = new ModelOrders();

        this.events = events;

        subscribe(events.ORDER_DATA, this.initOrder);
        subscribe(events.MESSAGE_SENDED, this.reload);

        this.notify = notify;
    }

    initOrder = data => {
        this.view.renderOrder();
        this.model.addOrderData(data);
    }

    onSubmit = () => {
        this.model.setUserInfo(this.view.getInputValue());
        this.notify(this.events.SEND_MESSAGE, JSON.stringify(this.model.data));
        this.model.sendInfoToLocalStorage();
    }

    reload = () => location.reload();
}