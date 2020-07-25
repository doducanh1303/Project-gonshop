import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        var {cart}=this.props;
        console.log(cart);
        return (
            <div>
              
                    
                    <tr>
                    <td>{cart.product.key}</td>
                    <td><img src={cart.product.image} /></td>
                    <td>{cart.product.name}</td>
                    <td>{cart.product.money}</td>
                    <td>{cart.quantity}</td>
                    <td>{cart.quantity * cart.product.money}</td>              
                    </tr>
                
                  
              
            </div>
        );
    }
    
}

export default CartItem;