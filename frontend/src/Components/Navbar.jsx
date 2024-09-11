// src/Components/Navbar.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";
import './Navbar.css'

const Navbar = () => {
  // Fetch the cart quantity from the Redux state
  const quantity = useSelector((state) => state.cart.quantity); // Correctly access cart.quantity

  return (
    <>
      <div className="w-100">
        
      <nav
        className="navbar navbar-expand-md bg-dark navbar-dark fixed-top"
        style={{ color: "whitesmoke" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <Link className="nav-link" to={"/"}>
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to={"/Shop"}>
                  <strong>Shop</strong>
                </Link>
              </li>
              
              <li className="nav-item mx-3">
                <Link to={"/Login"} className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to={"/Cart"} className="nav-link position-relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-cart4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                  </svg>
                  {/* Display the quantity badge */}
                  <span className="badge bg-danger position-relative top-0 start-85  translate-middle">
                    {quantity}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
