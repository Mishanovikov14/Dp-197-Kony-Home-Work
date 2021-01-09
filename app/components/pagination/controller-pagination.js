import ViewPagination from "./view-pagination.js";
import ModelPagination from "./model-pagination.js";

export default class ControllerPagination {
    constructor({ subscribe, events, notify }) {
        this.view = new ViewPagination();
        this.model = new ModelPagination();
        
        this.events = events;

        this.onSubscribe = type => {
            subscribe(type, this.onLoad);
            subscribe(type, this.onStart);
            subscribe(type, this.onRender);
        }

        this.onSubscribe(events.LOADED_DATA);
        this.onSubscribe(events.AFTER_SORT);
        this.onSubscribe(events.AFTER_SEARCH);
        this.onSubscribe(events.AFTER_FILTER);
        
        this.notify = notify;
    }

    onLoad = data => {
        this.model.records = data;
    }

    onStart = () => {
        const records = this.model.render();

        this.notify(this.events.PAG, records);
    }

    onRender = () => {
        this.view.render(this.model.initCountOfPages());
        this.view.handle(this.onHandle);
    }

    onHandle = (e) => {
        const pages = this.model.pag(e.target.dataset.value);
        this.notify(this.events.PAG, pages);
    }
}