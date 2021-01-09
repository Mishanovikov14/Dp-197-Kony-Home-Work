export default class ViewCart {
    htmlCartModal = document.querySelector('.modals');

    constructor() {
        this.htmlCartModal.insertAdjacentHTML('beforeend', `
            <div class="modal fade" id="cartDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body modal-cart-body">
                            <p class="test"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Bye</button>
                        </div>
                    </div>
                </div>
            </div>
        `);

        this.htmlCartContent = document.querySelector('#cartDetails .modal-cart-body');
        this.test = document.querySelector('#cartDetails .test');
    }

    render = ({
        id,
        productName,
        manufacture,
        category,
        ingridients,
        amount,
        units,
        price,
        imgLink}) => {
        // this.htmlCartContent.innerHTML = Object.entries(data).map(([name, value]) => `<p>${ name } : ${ value }</p>`).join('');
        this.test.innerText = `ID: ${id}`;
    }
}