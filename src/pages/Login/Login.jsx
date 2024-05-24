import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span>Sign Up NoW</span>
            </p>
          ) : (
            <p>
              Already have account? <span>Sign In NoW</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
