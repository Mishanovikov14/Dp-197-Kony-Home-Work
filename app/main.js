function getData() {
    const link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/2/public/full?alt=json';

    fetch(link)
        .then(response => response.json())
        .then(data => render(parseData(data.feed.entry).slice(1)));
}

getData();

function parseData(arr) {
    const names = [
        {
            name : 'id',
            type : 'number'
        },
        { 
            name : 'productName',
            type : 'string'
        }, 
        {
            name : 'manufacture',
            type : 'string'
        }, 
        {
            name : 'category',
            type : 'string'
        },
        {
            name : 'ingridients',
            type : 'string'
        },
        {
            name : 'amount',
            type : 'number'
        }, 
        {
            name : 'units',
            type : 'string'
        }, 
        {
            name : 'price',
            type : 'number'
        },
        {
            name : 'imgLink',
            type : 'string'
        }
    ];
    
    const shift = names.length;

    return arr.reduce((acc, { content }, i) => {
        const index = Math.floor(i / shift);
        const { name, type } = names[i % shift];

        if(!acc[index]){
            acc[index] = {};
        }

        acc[index][name] = parseContent(content.$t, type);

        return acc;       
    }, []);
}

function parseContent(content, type = 'string') {
    let answ = content;
    switch(type){
        case 'number': {
            answ = +(content.replace(',', '.'));
            break;
        }
        default: {
            answ = content;
            break;
        }
    }

    return answ;
}

function render(arr){
    document.querySelector('.cards').innerHTML = arr.map(renderCard).join('');
}

function renderCard({ id, productName, manufacture, category, ingridients, amount, units, price, imgLink }) {
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
        <p><span class="has-text-weight-bold">Ingridients:</span> <span>${ ingridients }</span></p>
        <p><span class="has-text-weight-bold">Amount:</span> <span>${ amount }</span></p>
        <p><span class="has-text-weight-bold">Units:</span> <span>${ units }</span></p>
        <p><span class="has-text-weight-bold">Price:</span> <span>${ price }$</span></p>
      </div>
    </div>
  </div> `;
}