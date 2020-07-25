import React, { Component } from 'react';
import Productright from './Productright'
import Productleft from './Productleft'

class Productitem extends Component {
    render() {
        var {product}=this.props;
        var {addtocart}=this.props;
        return (
            <div>
                
                <div className="products">
                        <Productleft/>
                        <Productright product={product} addtocart={addtocart} />
                 </div>
            </div>
        );
    }
}

export default Productitem;