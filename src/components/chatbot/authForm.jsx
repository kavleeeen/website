import React,{useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser,faEnvelope,faLock,faSpinner} from "@fortawesome/free-solid-svg-icons";

import foodBotAPI from "../../services/foodBotApi";
import "./styles/authForm.css";

const AuthForm=({onLogin}) => {
  const [isLogin,setIsLogin]=useState(true);
  const [formData,setFormData]=useState({
    username: "",
    email: "",
    password: ""
  });
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const [success,setSuccess]=useState("");


  const handleChange=(e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
    setSuccess("");
  };

  const handleSubmit=async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if(isLogin) {
        await loginUser();
      } else {
        await registerUser();
      }
    } catch(err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const registerUser=async () => {
    const result=await foodBotAPI.registerUser({
      username: formData.username,
      email: formData.email,
      password: formData.password
    });

    if(!result.success) {
      throw new Error(result.error);
    }

    setSuccess("Registration successful! Logging you in...");

    // Auto-login after successful registration
    setTimeout(async () => {
      await loginUser();
    },1000);
  };

  const loginUser=async () => {
    const result=await foodBotAPI.loginUser({
      email: formData.email,
      password: formData.password
    });

    if(!result.success) {
      throw new Error(result.error);
    }

    // Call the parent component's login handler
    onLogin(result.user,result.token);
  };

  const toggleMode=() => {
    setIsLogin(!isLogin);
    setError("");
    setSuccess("");
    setFormData({
      username: "",
      email: "",
      password: ""
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">
            <span className="icon-emoji">🍽️</span>
          </div>
          <h2 className="auth-title">
            {isLogin? "Welcome Back!":"Create Account"}
          </h2>
          <p className="auth-subtitle">
            {isLogin
              ? "Sign in to access your personalized meal recommendations"
              :"Join us to get started with AI-powered meal suggestions"
            }
          </p>
        </div>

        {error&&(
          <div className="message message-error">
            <FontAwesomeIcon icon={faEnvelope} className="message-icon" />
            <span className="message-text">{error}</span>
          </div>
        )}

        {success&&(
          <div className="message message-success">
            <FontAwesomeIcon icon={faUser} className="message-icon" />
            <span className="message-text">{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin&&(
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                <FontAwesomeIcon icon={faUser} className="label-icon" />
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="input"
                placeholder="Enter your username"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FontAwesomeIcon icon={faEnvelope} className="label-icon" />
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <FontAwesomeIcon icon={faLock} className="label-icon" />
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="button button-primary auth-submit"
          >
            {loading? (
              <>
                <FontAwesomeIcon icon={faSpinner} className="button-spinner" />
                <span className="button-text">{isLogin? "Signing In...":"Creating Account..."}</span>
              </>
            ):(
                <span className="button-text">{isLogin? "Sign In":"Create Account"}</span>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p className="auth-footer-text">
            {isLogin? "Don't have an account?":"Already have an account?"}{" "}
            <span onClick={toggleMode} className="toggle-link">
              {isLogin? "Sign Up":"Sign In"}
            </span>
          </p>
        </div>

        <div className="demo-credentials">
          <h4>Demo Credentials:</h4>
          <p><strong>Email:</strong> test@example.com</p>
          <p><strong>Password:</strong> TestPass123</p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
