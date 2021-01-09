export default class ViewCart {
    htmlCartModal = document.querySelector('.modals');

    constructor() {
        this.htmlCartModal.innerHTML = `
            <div class="modal fade" id="cartDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel">Cart</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body modal-cart-body">
                            <h4 class="text-center">Your cart is empty</h4>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.htmlCartBtn = document.querySelector('navbar-btn-container');
        console.log(this.htmlCartBtn,  this.htmlCartModal);
    }

    renderCart = (cartList, sum) => { 
        this.htmlCartModal.innerHTML = `
        <div class="modal fade" id="cartDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Cart</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ol id="product-list" class="text-center"></ol>
                        <h3 class="text-center">Summary: <span class="blue-text">${sum}$</span></h3>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Make an oreder</button>
                    </div>
                </div>
            </div>
        </div>`;

        const htmlList = document.querySelector('#product-list');
        cartList.forEach(({productName, price, count}) => {
            const cartListItem = document.createElement('li');
            cartListItem.innerHTML = `
                <h5>${productName}</h5>
                <p>${price} $</p>
                <p>${count}</p>
             `;
            htmlList.append(cartListItem);
        });
    }

    renderCount = count => {
        this.htmlCartBtn.innerText = `Cart (${ count })`;
    };
}