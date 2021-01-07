import ViewPagination from "./view-pagination.js";
import ModelPagination from "./model-pagination.js";

export default class ControllerPagination {
    constructor({ subscribe, events, notify }) {
        this.view = new ViewPagination(this.onPag);
        this.model = new ModelPagination();
        
        this.events = events;
        
        subscribe(events.LOADED_DATA, this.onLoad);
        subscribe(events.LOADED_DATA, this.onStart);
        subscribe(events.LOADED_DATA, this.onRender);
        
        subscribe(events.AFTER_SORT, this.onLoad);
        subscribe(events.AFTER_SORT, this.onStart);
        subscribe(events.AFTER_SORT, this.onRender);
        
        subscribe(events.AFTER_SEARCH, this.onLoad);
        subscribe(events.AFTER_SEARCH, this.onStart);
        subscribe(events.AFTER_SEARCH, this.onRender);
        
        subscribe(events.AFTER_FILTER, this.onLoad);
        subscribe(events.AFTER_FILTER, this.onStart);
        subscribe(events.AFTER_FILTER, this.onRender);
        
        this.notify = notify;
    }

    onLoad = data => {
        this.model.records = data;
    }

    onStart = () => {
        const records = this.model.render();

        this.notify(this.events.PAG, records);
    }

    onPag = (e) => {
        const records = this.model.pag(e.target.dataset.value);

        this.notify(this.events.PAG, records);
    }

    onRender = () => {
        this.view.render(this.model.initCountOfPages());
    }
}