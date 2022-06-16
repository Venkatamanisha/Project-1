
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Signin = () => {

  
    return (
        <div>
            


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="SignupModal" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="SignupModal">Register</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <button className='btn btn-primary w-100 mb-4'><span className="fa fa-google me-2"></span>Sign Up With Google</button>
        <button className='btn btn-primary w-100 mb-4'><span className="fa fa-facebook me-2"></span>Sign  Up With Facebook</button>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-outline-primary w-100 mt-5" >Submit</button>
</form>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Signin;