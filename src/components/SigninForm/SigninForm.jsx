// SigninForm

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import "./SigninForm.css";

const SigninForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState([""]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData); // TODO build signin service function

      props.setUser(user);
      navigate("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <main className="signMain">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="backVideo">
          <source src="https://videos.pexels.com/video-files/2897277/2897277-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="formConterinar">
        <h1>Log In</h1>
        <p>{message}</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              autoComplete="off"
              id="username"
              value={formData.username}
              name="username"
              onChange={handleChange}
              className="signin-input"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              autoComplete="off"
              id="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              className="signin-input"
            />
          </div>
          <div>
            <button>Log In</button>
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SigninForm;
