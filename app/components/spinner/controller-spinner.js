import ViewSpinner from "./view-spinner.js";

export default class ControllerSpinner {
    constructor({ subscribe, unsubscribe }) {
        this.view = new ViewSpinner();

        subscribe('Loaded_data', this.onLoad);
        this.unsubscribe = unsubscribe;
    }

    onLoad = () => {
        this.unsubscribe('Loaded_data', this.onload);
        this.view.hideSpinner();
    }
} 