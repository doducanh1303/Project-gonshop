import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from './../component/Header'
import './../App.css';

import Nav from './../component/Nav';
import Bannerowl from './../component/Bannerowl';
import Footerown from './../component/Footerown';
import Productcontainer from './../container/Productcontainer';
import Cartcontainer from './../container/Cartcontainer';

class Homepage extends Component {
    render() {
        return (
            <div>
                 
      <main>
        
        <div className="container2">
          <div className="banner">
             <Bannerowl/>
          </div>
        </div>

        <div className="container3">
         <Productcontainer/>
        </div>
      </main>
     
    </div>
          
        );
    }
}

export default Homepage;