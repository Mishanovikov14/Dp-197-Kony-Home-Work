export default class ViewRecord {

    htmlCards = document.querySelector('.cards');

    render = arr => {
        this.htmlCards.innerHTML = arr.map(this.renderCard).join('');
    }
    
    renderCard = ({
        id,
        productName,
        manufacture,
        category,
        ingridients,
        amount,
        units,
        price,
        imgLink}) => {

        return `
        <div class="card-m col-lg-4 col-md-6 col-xs-12">
          <div class="card h-100" id="${ id }" data-bs-toggle="modal" data-bs-target="#cardModal">
            <img src="${imgLink}" class="card-img-top" alt="img">
            <div class="card-body">
              <div class="parent">
                <h3 class="card-title text-center text-decoration-underline">${ productName }</h3>
                <p class="card-text"><strong>ID:</strong> ${ id }</p>
                <p class="card-text"><strong>Manufacture:</strong> ${ manufacture }</p>
                <p class="card-text"><strong>Category:</strong> ${ category }</p>
                <p class="card-text"><strong>Amount:</strong> ${ amount }</p>
                <p class="card-text"><strong>Units:</strong> ${ units }</p>
                <h4 class="text-center font-weight-bold blue-text"><strong>${ price }$</strong></h4>
              </div>
              <div class="links text-center">
                <button type="button" class="btn btn-outline-primary">Add to cart</button>
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#cardModal">More info</button>
              </div>
            </div>
          </div>
        </div>`;
    }
}

//<p class="card-text">${ ingridients }</p> добавить!!!!