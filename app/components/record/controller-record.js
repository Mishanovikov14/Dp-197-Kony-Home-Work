import ModelRecord from './model-record.js';
import ViewRecord from './view-record.js';

export default class ControllerRecord {
    constructor({ notify, events, subscribe }) {
        this.model = new ModelRecord();
        this.view = new ViewRecord(this.onCart);

        this.init();

        this.notify = notify;
        this.events = events;

        subscribe(events.AFTER_SORT, this.onRender);
        subscribe(events.AFTER_SEARCH, this.onRender);
        subscribe(events.AFTER_FILTER, this.onRender);
        subscribe(events.PAG, this.onRender);
    }

    init = () => {
        this.model.loadRecords()
            .then(data => {
               this.notify(this.events.LOADED_DATA, data);
            });
    }

    onRender = data => {
        this.view.render(data); 
    }

    onCart = e => {
        const product = this.model.getRecordById(e.target.dataset.cartId);

        this.notify(this.events.INFO_CART, product);
    }
}