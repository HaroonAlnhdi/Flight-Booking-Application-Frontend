import authService from "../../services/authService";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupForm.css";

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState([""]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConf: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      updateMessage("");
      const newUserResponse = await authService.signup(formData);
      props.setUser(newUserResponse.user);
      navigate("/signin");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const {
    username,
    password,
    passwordConf,
    first_name,
    last_name,
    email,
    phone_number,
  } = formData;

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main className="signupmain">
      <div className="leftSide">
        <video autoPlay loop muted playsInline className="backVideo">
          <source
            src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/online-ticket-booking-animation-download-in-lottie-json-gif-static-svg-file-formats--travel-flight-tourism-hotel-pack-holidays-animations-5105109.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="rightSide">
        <div className="SignupFormContainer">
          <h1>Sign Up</h1>
          <p>{message}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="name"
                  value={username}
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="confirm">Confirm Password:</label>
                <input
                  type="password"
                  id="confirm"
                  value={passwordConf}
                  name="passwordConf"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="first_name">First Name:</label>
                <input
                  type="text"
                  id="first_name"
                  value={first_name}
                  name="first_name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="last_name">Last Name:</label>
                <input
                  type="text"
                  id="last_name"
                  value={last_name}
                  name="last_name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone_number">Phone Number:</label>
                <input
                  type="text"
                  id="phone_number"
                  value={phone_number}
                  name="phone_number"
                  maxLength={8}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="signupbtn">
              <button disabled={isFormInvalid()}>Sign Up</button>
            </div>
            <p>
              You already have an account? <Link to="/signin">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignupForm;
