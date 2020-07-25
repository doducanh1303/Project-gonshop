import React, { Component } from 'react';
import {connect} from 'react-redux';

import CartItem from './../component/CartItem';
import Logo from './../component/Logo';
import CartTotal from './../component/CartTotal';

class Cartcontainer extends Component {
    render() {
        var {cart} = this.props;
          console.log(cart)
        return (
          <Logo >
              {this.showCart(cart)}
              {this.showTotal(cart)}
          </Logo>
        )
    }
    coutdow=()=>{}
    showCart=(cart)=>{
        var result=null;
        if(cart.length >0){
            var result=cart.map((cart,key)=>{
                 return <CartItem key={key} cart={cart}/>
            })
        }
        return result;
    }


    showTotal=(cart)=>{
     var result=null;
     if(cart.length>0){
         var result=<CartTotal cart={cart}/>
             
    }
    return result;
}


   
   
  
    
}
const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps,null)(Cartcontainer);