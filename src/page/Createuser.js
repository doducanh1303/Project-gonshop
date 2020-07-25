import React, { Component } from 'react';

class Createuser extends Component {
    render() {
        return (
            <div>
                 <main>
      <div className="container-from">
      <div className="from">
      <h3>CREATE ACCOUNT</h3>
      <span>First Name</span> 
      <input type="text" className="from3" />
      <br />
      <span>Last Name</span>
      <input type="text" className="from4" />
      <br/>
      <span>Your Email Address*</span>
      <input type="text" className="from5" />
      <br/>
      <span>Your Password*</span>
      <input type="text" className="from6" />
      <button className="clickform">CREATE AN ACCOUNT</button>
     
    </div>
  </div>
</main>
            </div>
        );
    }
}

export default Createuser;