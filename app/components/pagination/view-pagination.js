export default class ViewPagination {
    htmlPagination = document.querySelector('.pagination');

    constructor(cbPag, count) {
        this.pag = () => {
            let text = ``;
            console.log(count);
            for (let i = 1; i <= count; i++) {
                text +=  `
                <li class="page-item">
                    <a class="page-link pugl" href="#" tabindex="-1" data-value="${ i }" aria-disabled="true">${ i }</a>
                </li> `;
            }

            return text;
        }
        
        this.htmlPagination.innerHTML = this.pag();

        this.htmlPagLinks = document.querySelectorAll('.pugl');

        for (this.htmlPagLink of this.htmlPagLinks) {
            this.htmlPagLink.addEventListener('click', cbPag);
        }
    }
} 