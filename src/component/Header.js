import React, { Component } from 'react';
import login from './../page/Login';
import create from './../page/Createuser'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <div className="container">
  <div className="flag">
    <div className="left">
      <div className="gmail">
        <i className="fa fa-envelope" aria-hidden="true" />
        <p>thangdetao@gmail.com</p>
      </div>
      <div className="phone">
        <i className="fa fa-phone" aria-hidden="true" />
        <p>0329834791</p>
      </div>
    </div>
    <div className="right">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/create">Create Account</Link>
        </li>
        <li>
          USD
        </li>
        <li>
          Wishlist(0)
        </li>
        <li>
        </li>
      </ul>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Header;