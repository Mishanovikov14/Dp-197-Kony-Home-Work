export default class ViewOrders {

    constructor(cbSubmit) {
        this.cbSubmit = cbSubmit;
    }

    renderOrder = () => {
        const htmlModal = document.querySelector('#cartDetails');
        htmlModal.innerHTML = ``;
        htmlModal.innerHTML = `
        <div id="cart-modal-window" class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel">Contact Info</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body modal-body--cart">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                        <input type="text" class="form-control order-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" data-name="name" autofocus>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                        <input type="email" class="form-control order-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" data-name="email">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Phone number</span>
                     <input type="text" class="form-control order-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" data-name="phone">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-order-submit">Submit</button>
                </div>
            </div>
        </div>`;

        const htmlSubmitBtn = document.querySelector('.btn-order-submit');
        htmlSubmitBtn.addEventListener('click', this.cbSubmit);
    }

    getInputValue = () => {
        const htmlOrderInputs = [...document.querySelectorAll('.order-input')];

        return htmlOrderInputs.map(inp => {
            return {
                value: inp.value,
                field: inp.dataset.name
            }
        });
    }
}