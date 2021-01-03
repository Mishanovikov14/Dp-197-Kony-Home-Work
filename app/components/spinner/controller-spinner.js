import ViewSpinner from "./view-spinner.js";

export default class ControllerSpinner {
    constructor({ subscribe, unsubscribe, events }) {
        this.view = new ViewSpinner();

        subscribe(events.LOADED_DATA, this.onLoad);
        this.unsubscribe = unsubscribe;

        this.events = events;
        this.view.render();
    }

    onLoad = () => {
        this.unsubscribe(this.events.LOADED_DATA, this.onload);
        this.view.hideSpinner();
    }
} 