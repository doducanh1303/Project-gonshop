import React, { Component } from 'react';
import CartItem from './../component/CartItem';
import Table from './../component/TableCart'
import homepage from './../page/Homepage'
import './../App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Logo extends Component {
    render() {
        return (
            <div>
                <div className="top">
  <div className="left">
  <li>
    <Link to="/"> <a href="index.html"> <img src="image/gon_shop_01_home.png" alt="" /></a></Link>
  </li>
  </div>
  <div className="center">
    <input type="text" placeholder="Search for product" />
    <i className="fa fa-search" aria-hidden="true" />
  </div>
  <div className="right">
    <a href="rohang.html">
      <i className="fa fa-shopping-bag" aria-hidden="true" />
    </a>
    <span className="text-secondary">$00</span>
    <span className="tron1 tron" data-shopping />
    <div className="shopping">
      <div className="table">
     
      <table style={{width: '100px'}}>
   <tbody>
               {this.props.children}
   </tbody>
      </table>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Logo;