import {combineReducers} from 'redux';
import product from '../reduce/product';
import cart from '../reduce/cart';


const appReduce = combineReducers({
   product,cart
})
export default appReduce;