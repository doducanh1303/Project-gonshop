import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="menu">
  <ul>
    <li className="active">
      <a href>
        <i className="fa fa-list" aria-hidden="true" />
        CATEGORIES
      </a>
      <div className="dropmenu1">
        <ul>
          <li><a href>Dresses</a></li>
          <li><a href>Accessories</a></li>
          <li><a href>Shoes</a></li>
          <li><a href>Bags</a></li>
          <li><a href>Sweaters</a></li>
          <li><a href>Beauties</a></li>
          <li><a href>T-Shirt</a></li>
          <li><a href>Pants</a></li>
          <li><a href>Jackets</a></li>
        </ul>
      </div>
    </li>
    <li className="active1">
      <a href>
        HOME
        <i className="fa fa-angle-down" aria-hidden="true" />
      </a>
      <div className="dropmenu2">
        <ul>
          <li><a href>Home1</a></li>
          <li><a href>Home2</a></li>
          <li><a href>Home3</a></li>
          <li><a href>Home4</a></li>
          <li><a href>Home5</a></li>
          <li><a href>Home6</a></li>
          <li><a href>Home7</a></li>
          <li><a href>Home8</a></li>
          <li><a href>Home9</a></li>
        </ul>
      </div>
    </li>
    <li className="active2">
      <a href>
        FEATURES
        <i className="fa fa-angle-down" aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href>
        SHOPPING
        <i className="fa fa-angle-down" aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href>
        BLOG
        <i className="fa fa-angle-down" aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href>
        CONTACT
      </a>
    </li>
    <li>
      <a href>
        ABOUT
      </a>
    </li>
  </ul>
</div>

            </div>
        );
    }
}

export default Nav;