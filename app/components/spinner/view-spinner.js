export default class ViewSpinner {
    htmlSpinner = document.querySelector('.loader-spinner');

    hideSpinner = () => {
        this.htmlSpinner.innerHTML = '';
        this.htmlSpinner.classList.remove('loader-spinner');
    }
}