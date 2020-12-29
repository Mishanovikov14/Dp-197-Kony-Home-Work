import ModelRecord from './model-record.js';
import ViewRecord from './view-record.js';

export default class ControllerRecord {
    constructor() {
        this.model = new ModelRecord();
        this.view = new ViewRecord(this.onSort, this.onSearch, this.onFilter);

        this.init();
    }

    init = () => {
        this.model.loadRecords()
            .then(data => {
               this.view.render(data); 
            });
    }

    onSort = e => {
        const records = this.model.sort(e.target.value);

        this.view.render(records);
    }

    onSearch = e => {
        const records = this.model.search(e.target.value);

        this.view.render(records);
    }

    onFilter = e => {
        const records = this.model.filterProduct(e.target.value);

        this.view.render(records);
    }
}