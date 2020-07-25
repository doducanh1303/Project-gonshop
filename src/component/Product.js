import React, { Component } from 'react';
class Product extends Component {
    render() {
       
  
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Product;