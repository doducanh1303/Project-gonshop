import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { Component } from 'react';

class Footerown extends Component {
    render() {
        return (
            <div>
                <Carousel>
        <div>
        <div className="item-slider active">
  <img src="image/footter-slider.png" />
  <h3>Vestibulum</h3>
  <p className="lorem ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quisquam, exercitationem explicabo sit numquam.</p>
  <div className="cmt">
    <div className="cmt1">
      <i className="fa fa-play" aria-hidden="true" />
      <a href="#" className="readmore"> Read More</a>
    </div>
    <div className="cmt2">
      <i className="fa fa-comments-o" aria-hidden="true" />
      <span>0</span>
    </div>
  </div>
</div>
        </div>

        <div>
        <div className="item-slider active">
  <img src="image/footter-slider.png" />
  <h3>Vestibulum</h3>
  <p className="lorem ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quisquam, exercitationem explicabo sit numquam.</p>
  <div className="cmt">
    <div className="cmt1">
      <i className="fa fa-play" aria-hidden="true" />
      <a href="#" className="readmore"> Read More</a>
    </div>
    <div className="cmt2">
      <i className="fa fa-comments-o" aria-hidden="true" />
      <span>0</span>
    </div>
  </div>
</div>
        </div>

                </Carousel>
            </div>
        );
    }
}

export default Footerown;