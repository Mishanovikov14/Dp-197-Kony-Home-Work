export default class ViewCard {
    htmlModalCard = document.querySelector('.modal-card');

    render = () => {
        this.htmlModalCard.innerHTML = `
        <div class="modal fade" id="cardModal" tabindex="-1" aria-labelledby="cardModalLable" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cardModalLable">Product Info</h5>
                        <button class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                    <p class="card-text"><strong>Manufacture:</strong> sdfsdfsdfs</p>
                    <p class="card-text"><strong>Manufacture:</strong> sdfsdfsdfs</p>
                    <p class="card-text"><strong>Manufacture:</strong> sdfsdfsdfs</p>
                    <p class="card-text"><strong>Manufacture:</strong> sdfsdfsdfs</p>
                    <p class="card-text"><strong>Manufacture:</strong> sdfsdfsdfs</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button class="btn btn-secondary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>`
    }
}