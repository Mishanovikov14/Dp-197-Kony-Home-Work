import ViewFilters from "./view-filters.js";
import ModelFilters from "./model-filters.js";
import events from "../../helpers/events.js";

export default class ControllerFilters {
    constructor({ subscribe, events, notify }) {
        this.view = new ViewFilters(this.onSort, this.onSearch, this.onFilter);
        this.model = new ModelFilters();

        this.events = events;
        subscribe(events.LOADED_DATA, this.onLoad);
        this.notify = notify;
    }

    onLoad = data => {
        this.model.records = data;
    }

    onSort = e => {
        const records = this.model.sort(e.target.value);

        this.notify(this.events.AFTER_SORT, records);
    }

    onSearch = e => {
        const records = this.model.search(e.target.value);

        this.notify(this.events.AFTER_SEARCH, records);
    }

    onFilter = e => {
        const records = this.model.filterProduct(e.target.value);

        this.notify(this.events.AFTER_FILTER, records);
    }
}