import * as types from '../contant/Action';
const addtocart=(product,quantity)=>{
  return {
    type:types.ADD_T0_CART,
    product,
    quantity
  }
}
export default addtocart;