import * as types from './../contant/Action'
const InitialState = [
    {
      product:{
        
            id:1,
            image:"https://cdn.shopify.com/s/files/1/1170/5722/products/6.jpg?v=1465398668",
            name:"Doneccum",
            money:30.000,
            
  
        }, 
        quantity:5   
   },
   {
    product:{
        id:2,
        image:"https://cdn.shopify.com/s/files/1/1170/5722/products/3.jpg?v=1465397425",
        name:"Ba lo",
        money:40.000,
      
    },
    quantity:4
   
   },
   {
       product: {
        id:3,
        image:"https://cdn.shopify.com/s/files/1/1170/5722/products/54.jpg?v=1465397761",
        name:"Nonson",
        money:50.000,
      
    },
    quantity:3
   },
   
   ]
   const cart = (state = InitialState, action) => {
    var {product,quantity} = action;
       switch (action.type) {
           
           case types.ADD_T0_CART:
               state.push({
                   product,
                   quantity
               })
               return [...state]
           default:
               return state
       }
   }
   export default cart;