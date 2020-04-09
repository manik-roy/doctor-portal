import React, { useContext } from 'react';
import './Login.css';
import { UserContext } from '../../useAuth';
import { withRouter, Redirect } from 'react-router-dom';

const Login = () => {
  const {isAuth, handleAuth} = useContext(UserContext)
  const submitHandler = e => {
    e.preventDefault()
    handleAuth()
  }
if(isAuth) {
  return <Redirect to="/dashboard/doctors"/>
}

  return (
    <section id="login-page">
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="sign-in-container">
            <div  className="signUp-form shadow">
              <h2 className="text-center pb-4">Login</h2>
            <form autoComplete="off" className="mt-4" onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="username">User name</label>
                <input type="text" className="form-control" id="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" required/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn sign-in-btn w-100 text-white">Sign In</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default withRouter(Login);