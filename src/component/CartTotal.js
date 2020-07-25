import React, { Component } from 'react';

class CartTotal extends Component {
    render() {
        var {cart}=this.props;
        return (
            <div>
                <tr>
                    <td>Tong</td>
        <td>{this.showTotal(cart)}</td>
                </tr>
            </div>
        );
    }
    showTotal=(cart) => {
       var total =0;
       for(var i=0;i<cart.length;i++) {
           total += cart[i].product.money*cart[i].quantity;
       }
       return total
    }
}

export default CartTotal;