import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/api/Auth/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Invalid credentials");
        return res.json();
      })
      .then(() => {
        setSuccessMessage(`Login successful! Welcome, ${email}`);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setSuccessMessage("");
      });
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <form className="col" onSubmit={handleSubmit}>
        <div className="container">
          <h1>Welcome Back</h1>
          <p>Login to continue</p>
          <hr />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            name="email"
            required
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            name="password"
            required
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="clearfix">
            <button type="submit" className="signupbtn button">
              Sign In
            </button>
            <Link to="/Register">Don't have an account?</Link>
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
