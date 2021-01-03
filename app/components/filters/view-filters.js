export default class ViewFilters {
    htmlheader = document.querySelector('header');

    constructor(cbSort, cbSearch, cbFilter) {
        this.htmlheader.innerHTML = `
            <div class="field">
                <div class="control">
                    <input class="input is-danger input-search" type="text" placeholder="Search">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <div class="select is-info">
                        <select class="select-sort">
                            <option value="price-exp">Expensive first</option>
                            <option value="price-cheap">Cheap first</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <div class="select is-info">
                        <select class="select-filter">
                            <option>Select category</option>
                            <option value="category-beverages">Beverages</option>
                            <option value="category-tea">Tea & Coffee</option>
                            <option value="category-bakery">Bread & Bakery</option>
                            <option value="category-snacks">Snacks</option>
                            <option value="category-sweets">Sweets</option>
                            <option value="category-fruits">Fruits & Vegetables</option>
                            <option value="category-grains">Grains, Pasta & Sides</option>
                            <option value="category-meat">Meat & Seafood</option>
                            <option value="category-eggs">Dairy, Eggs & Cheese</option>
                            <option value="category-sauces">Sauces</option>
                        </select>
                    </div>
                </div>
            </div>`;

        this.htmlSort = document.querySelector('.select-sort');
        this.htmlFilter = document.querySelector('.select-filter');
        this.htmlSearch = document.querySelector('.input-search');

        this.htmlSort.addEventListener('input', cbSort);
        this.htmlSearch.addEventListener('input', cbSearch);
        this.htmlFilter.addEventListener('input', cbFilter);
    }
}