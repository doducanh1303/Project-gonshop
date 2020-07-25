import React, { Component } from 'react';


class Productright extends Component {
    
    render() {
        var {product}=this.props;
      console.log(product)
        return (
            <div>
                <div className="products-right">
  <div className="slide-menu">
    <ul>
      <li><a href>NEW ARRIVAL</a></li>
      <li><a href>FEATURED PRODUCT</a></li>
      <li><a href>BEST SELLERS</a></li>
    </ul>
  </div>
 <div className="container10">
 <div className="eight-product">
    <div className="item-eight-product">
      <a href>
        <img src={product.image} />
        <p>{product.name}</p>
        <p>{product.price}</p>
        <img className="start" src={product.image1} />
      </a>
      <button className="mua" onClick={()=> this.showaction(product)} >Add to cart</button>
    </div>
    
  </div>
 </div>
  
  {/* het 8 san pham */}
   <img src="image/block_main.jpg" alt="" />
  <div className="seven-product">
    <div className="seven-left">
      <a href>
        <img src="image/17_fc88a7c5-bb68-4410-b92d-df5a9ae811c6_large.jpg" />
        <p>Cras im except</p>
        <p> $246.00</p>
        <img className="start" src="image/start.png" />
      </a>
    </div>
    <div className="seven-right">
      <div className="product-item-one">
        <div className="product-seven-item">
          <div className="product-seven-item-small">
            <img src="image/13.png" />
            <div className="product-seven-text">
              <p>Cras im except</p>
              <p> $246.00</p>
              <img className="start" src="image/start.png" />
            </div>
          </div>
        </div>
        <div className="product-seven-item">
          <div className="product-seven-item-small">
            <img src="image/14.png" />
            <div className="product-seven-text">
              <p>Cras im except</p>
              <p> $246.00</p>
              <img className="start" src="image/start.png" />
            </div>
          </div>
        </div>
        <div className="product-seven-item">
          <div className="product-seven-item-small">
            <img src="image/15.png" />
            <div className="product-seven-text">
              <p>Cras im except</p>
              <p> $246.00</p>
              <img className="start" src="image/start.png" />
            </div>
          </div>
        </div>
        <div className="product-seven-item">
          <div className="product-seven-item-small">
            <img src="image/16.png" />
            <div className="product-seven-text">
              <p>Cras im except</p>
              <p> $246.00</p>
              <img className="start" src="image/start.png" />
            </div>
          </div>
        </div>
        <div className="product-seven-item">
          <div className="product-seven-item-small">
            <img src="image/17.png" />
            <div className="product-seven-text">
              <p>Cras im except</p>
              <p> $246.00</p>
              <img className="start" src="image/start.png" />
            </div>
          </div>
        </div>
        <div className="product-seven-item">
          <div className="product-seven-item-small">
            <img src="image/18.png" />
            <div className="product-seven-text">
              <p>Cras im except</p>
              <p> $246.00</p>
              <img className="start" src="image/start.png" />
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>

   <div className="seach-text">
    <h3>NEWLETTERS</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus atque quae hic reprehenderit porro nesciunt dolor iure laborum laboriosam.</p>
    <input type="text" className="seach1" placeholder="Seach product" />
    <button type="submit" className="click">Seach</button>
  </div>  
</div>

            </div>
        );
    }
   showaction=(product)=>{
     {this.props.addtocart(product)}
   }
}


export default Productright;