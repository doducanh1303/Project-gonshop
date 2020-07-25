import React, { Component } from 'react';
import {connect} from 'react-redux';
import Product from './../component/Product';
import Productitem from './../component/Productitem';
import addtocart from './../action/index';
class Productcontainer extends Component {
    render() {
        var {product} = this.props;
         console.log(product)
        return (
            <Product>
            {this.Showproduct(product)}
            </Product>
        )
    }
    Showproduct=(product) =>{
        var result=null;
        var {addtocart}=this.props
        if(product){
            var result =product.map((product,key) =>{
                   return  <Productitem key={key} addtocart={addtocart} product={product}/>   
            })
        }
        return result;
    }
   
}

const mapStateToProps = (state, ownProps) => {
   return {
    product: state.product
   }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       addtocart: (product) => {
            dispatch(addtocart(product,1));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Productcontainer);