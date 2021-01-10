export default class ModelOrders {

    data = [];

    addOrderData = order => {
        this.data.push(order);
    }

    setUserInfo = userInfo => {
        const arr = [];
        userInfo.forEach(({ field, value }) => {
            arr.push({field, value});
        });
        this.data.push(arr);
    }

    sendInfoToLocalStorage = () => {
        const arr = [];
        const history = localStorage.getItem('OrderHistory');
        const historyOrder = JSON.parse(history) ?? [];
        historyOrder.forEach(el => arr.push(el));
        arr.push(this.data);
        localStorage.setItem('OrderHistory', JSON.stringify(arr));
    }
}
