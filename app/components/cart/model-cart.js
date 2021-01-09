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
    }

    countSummary() {
        const summary = this.list.reduce((acc, { price }) => {
            acc += price;
            return acc;
        }, 0); 

        return summary
    }
}