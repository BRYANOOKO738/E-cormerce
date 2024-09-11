import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/Auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error);
          });
        }
      })
      .then(() => {
        setSuccessMessage(`Signup successful! Welcome, ${username}`);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setSuccessMessage("");
      });
  };

  return (
    <div className="centered-container">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <div className="clearfix">
            <button type="submit" className="signupbtn button">
              Sign Up
            </button>
            <Link to="/Login">Already have an account?</Link>
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </form>
    </div>
  );
};

export default Register;
