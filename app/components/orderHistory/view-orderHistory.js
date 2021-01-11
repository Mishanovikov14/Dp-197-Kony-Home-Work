export default class ViewOrderHistory {
    htmlOrderHistory = document.querySelector('.orderHistory');
    htmlOrderHistoryBtn = document.querySelector('#btn-order-history');

    constructor(cb) {
        this.cb = cb;
        this.htmlOrderHistory.innerHTML = `
            <div class="modal fade" id="orderHistory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel">History of orders</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ol id="order-list" class="text-center">
                                <h3 class="text-center">Your history of orders is empty</h3>
                            </ol>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div> `;

        this.htmlOrderHistoryBtn.addEventListener('click', this.cb);
    }

    renderOrdersList = (orderList) => {
        
        const htmlList = document.querySelector('#order-list');
        let counter = 0;

        htmlList.innerHTML = ``;

        orderList.forEach(el => {
            el.forEach(e => {
                let sum = 0;

                htmlList.insertAdjacentHTML('beforeend', 
                `<div class="order-list-container">
                    <li id="order-list-count${counter}"></li>
                </div>`);

                const htmlOrderList = document.querySelector(`#order-list-count${counter}`);

                e.forEach(({id, price, count, productName}) => {
                    
                    htmlOrderList.insertAdjacentHTML('beforeend', `
                    <h4>Product name: ${productName}</h4>
                    <h5>ID: ${id}</h5>
                    <h5>Price: ${price}$</h5>
                    <h5>Amount: ${count}</h5>`);
                    sum += price;
                });

                htmlOrderList.insertAdjacentHTML('beforeend',
                    `<h3 class="text-center">Summary: <span class="blue-text">${sum}$</span></h3>`
                );
                counter++;
            });
        });
    }
}