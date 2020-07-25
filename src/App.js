import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from './component/Header'
import './App.css';

import Nav from './component/Nav';
import Bannerowl from './component/Bannerowl';
import Footerown from './component/Footerown';
import Productcontainer from './container/Productcontainer';
import Cartcontainer from './container/Cartcontainer';
import router from './router/router';
import Footter from './component/Footter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
 
  render() {
      return (
        <Router>
        <div className="App">
        <header>
         <Header/>
        </header>
        <main>
         <div className="container1">
           <Cartcontainer checkconnect={(e)=>this.Coutdow(e)}/>
             <Nav/>
         </div>
        
         {this.showRouter(router)}
         
        
         
        </main>
        <footer>
        
        
       <Footter/>
        </footer>
        </div>
        </Router>
      );
  }
  Coutdow=(e)=>{
    console.log("oke")
  }
  showRouter=(router)=>{
    var result=null;
    if(router){
      var result=router.map((item,key)=>{
          return (
           <Route
           key={key}
           path={item.path}
           component={item.main}
           exact={true}
           />
          )
  
      })
    }
    return result
    }
}




export default App;
