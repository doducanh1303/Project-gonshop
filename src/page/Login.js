import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <main>
  <div className="container-from">
    <div className="from">
      <h3>CUSTOMER LOGIN</h3>
      <span>Email:</span> 
      <input type="text" className="from1" />
      <br />
      <span>Password:</span>
      <input type="text" className="from2" />
      <button className="clickform">Submit</button>
      <div className="store">
        <a href="#">Forgot your password ?</a>
        <span>or</span>
        <a href="#">Sub</a>
      </div>
    </div>
  </div>
</main>

            </div>
        );
    }
}

export default Login;