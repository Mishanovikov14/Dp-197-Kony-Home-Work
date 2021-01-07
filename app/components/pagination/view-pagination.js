export default class ViewPagination {
    htmlPagination = document.querySelector('.pagination');

    constructor(cbPag) {
        // this.pag = () => {
        //     let text = ``;
        //     console.log(count);
        //     for (let i = 1; i <= 5; i++) {
        //         text +=  `
        //         <li class="page-item">
        //             <a class="page-link pugl" href="#" tabindex="-1" data-value="${ i }" aria-disabled="true">${ i }</a>
        //         </li> `;
        //     }

        //     return text;
        // }
        
        //  this.pag();

        this.htmlPagLinks = document.querySelectorAll('.pugl');

        for (this.htmlPagLink of this.htmlPagLinks) {
            this.htmlPagLink.addEventListener('click', cbPag);
        }
    }
    

    render = count => {
            let text = ``;
            for (let i = 1; i <= count; i++) {
                text +=  `
                <li class="page-item">
                    <a class="page-link pugl" href="#" tabindex="-1" data-value="${ i }" aria-disabled="true">${ i }</a>
                </li> `;
            }

            return this.htmlPagination.innerHTML = text;
    }
} 