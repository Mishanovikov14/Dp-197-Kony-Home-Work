export default class ModelCart {
    list = [];
    uniqList = new Set();
    renderList = [];

    addToCart = product => {
        this.list.push(product);
        this.uniqList.add(product);
        this.renderList = [];
        this.uniqList.forEach(el => {
            const count = this.list.reduce((count, product) => product == el ? ++count : count, 0);
            this.renderList.push({
                count,
                ...el
            })
        });
        console.log(this.renderList);

    }

    countSummary() {
        const summary = this.list.reduce((acc, { price }) => {
            acc += price;
            return acc;
        }, 0); 

        return summary
    }

    substrAmount = id => {
        const product = this.renderList.find(element => element.id == id.slice(1));
        product.count--;
        console.log(this.renderList);
        return product;
    }
}