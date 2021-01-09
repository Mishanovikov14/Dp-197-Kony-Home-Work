import ControllerCart from './components/cart/controller-cart.js';
import ControllerFilters from './components/filters/controller-filters.js';
import ControllerPagination from './components/pagination/controller-pagination.js';
import ControllerRecord from './components/record/controller-record.js';
import ControllerSpinner from './components/spinner/controller-spinner.js';
import Publisher from './helpers/publisher.js';

const publisher = new Publisher();
const spinner = new ControllerSpinner(publisher.methods);
const record = new ControllerRecord(publisher.methods);
const filters = new ControllerFilters(publisher.methods);
const cart = new ControllerCart(publisher.methods);
const pagination = new ControllerPagination(publisher.methods);