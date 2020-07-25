import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { Component } from 'react';

class Bannerowl extends Component {
    render() {
        return (
            <Carousel>
           

                   
                <div className="baner2">
                   <div className="auto">
                    <p id="text1">SPRING SUMMER 2020</p>
                    <h1 className="text3">New High Collection </h1>
                    <p id="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis voluptas tenetur at itaque a.</p>
               
                        <a href="" className="button-view1">VIEW MORE</a>
                        
                   </div>
                   </div>
                     
                <div className="baner1">
                    <div className="auto">
                        <p id="text1">SPRING SUMMER 2020</p>
                    <h1 className="text3">New High Collection </h1>
                    <p id="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis voluptas tenetur at itaque a.</p>
                
                        <a href="" className="button-view">VIEW MORE</a>
                    </div>
                        
                  
                </div>
          

          
                 
        
            </Carousel>
        );
    }
}
export default Bannerowl;