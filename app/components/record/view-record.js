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
        <div class="card">
        <div class="card-image">
              <figure class="image is-4by3">
                <img src="${imgLink}" alt="Placeholder image">
              </figure>
            </div>
        <div class="card-content">
          <div class="content">
            <p><span class="has-text-weight-bold">ID:</span> <span>${ id }</span></p>
            <p><span class="has-text-weight-bold">Product name:</span> <span>${ productName }</span></p>
            <p><span class="has-text-weight-bold">Manufacture:</span> <span>${ manufacture }</span></p>
            <p><span class="has-text-weight-bold">Category:</span> <span>${ category }</span></p>
            <p><span class="has-text-weight-bold">Ingridients:</p>
            <div class="field">
                <div class="control">
                    <textarea class="textarea is-info" placeholder="Info textarea">${ ingridients }</textarea>
                </div>
            </div>
            <p><span class="has-text-weight-bold">Amount:</span> <span>${ amount }</span></p>
            <p><span class="has-text-weight-bold">Units:</span> <span>${ units }</span></p>
            <p><span class="has-text-weight-bold">Price:</span> <span>${ price }$</span></p>
          </div>
        </div>
      </div> `;
    }
}