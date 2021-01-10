export default class ModelBot {

    get url() {
        return `https://api.telegram.org/bot1414205068:AAGYMvHh1UesBRUE6tEiaFV1AOnbMfnXtOI/sendMessage?chat_id=398939473&text=`;
    }

    send = msg => {
        fetch(`${ this.url }${ msg }`);
    }
}