import ViewPagination from "./view-pagination.js";
import ModelPagination from "./model-pagination.js";

export default class ControllerPagination {
    constructor({ subscribe, events, notify }) {
        this.view = new ViewPagination(this.onPug, this.getCountOfPages);
        this.model = new ModelPagination();

        this.count = this.model.countOfPages;
        this.events = events;

        subscribe(events.LOADED_DATA, this.onLoad);
        subscribe(events.LOADED_DATA, this.onStart);

        subscribe(events.AFTER_SORT, this.onLoad);
        subscribe(events.AFTER_SORT, this.onStart);

        subscribe(events.AFTER_SEARCH, this.onLoad);
        subscribe(events.AFTER_SEARCH, this.onStart);

        subscribe(events.AFTER_FILTER, this.onLoad);
        subscribe(events.AFTER_FILTER, this.onStart);
        
        this.notify = notify;
    }

    onLoad = data => {
        this.model.records = data;
    }

    onStart = () => {
        const records = this.model.render();

        this.notify(this.events.PAG, records);
    }

    onPug = (e) => {
        const records = this.model.pug(e.target.dataset.value);

        this.notify(this.events.PAG, records);
    }

    getCountOfPages = () => {
        return this.model.getCountOfPages();
    }
}