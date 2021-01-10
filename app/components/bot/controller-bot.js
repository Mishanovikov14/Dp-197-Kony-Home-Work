import ModelBot from "./model-bot.js";

export default class ControllerBot {
    constructor({ subscribe, notify, events }) {
        this.model = new ModelBot();

        this.events = events;

        subscribe(events.SEND_MESSAGE, this.onSend);

        this.notify = notify;
    }

    onSend = msg => {
        this.model.send(msg).then(() => this.notify(this.events.MESSAGE_SENDED));
    }
}