// SingleProduct.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/CartRedux";
import "./SingleProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = () => {
  const notify = () => toast("Added to Cart");
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Track quantity for the product
  const dispatch = useDispatch();

  const handleClick = () => {
    // Dispatch the product with correct quantity and total
    dispatch(
      addProduct({
        ...product,
        quantity,
        total: product.price * quantity,
      })
    );
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/Product/find/${id}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="d-flex row" style={{ marginTop: "40px" }}>
      <div
        className="col-md me-5"
        style={{ borderRadius: "5px", border: "2px solid lightgrey" }}
      >
        <img
          src={product.img}
          alt={product.title}
          style={{ height: "450px", width: "400px" }}
        />
      </div>
      <div className="col-md text-start">
        <h4 className="text-uppercase">{product.category}</h4>
        <h1 className="display-5 fw-bolder">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating:
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ))}
          {product.rating && product.rating.rate}
        </p>
        <h3 className="display-6 fw-bolder my-4" style={{ color: "red" }}>
          ${product.price}
        </h3>
        <p className="lead fw-bold">{product.description}</p>
        <div className="mb-3">
          SIZE :
          <span className="border border-danger border-2 text-center rounded-pill p-1">
            {product.size}
          </span>
        </div>
        <div>
          Color :
          <span className="border border-success border-2 text-center rounded-pill p-1">
            {product.color}
          </span>
        </div>
        <div>QUANTITY:</div>
        <div className="row">
          <div className="col-md-8 d-grid">
            <button
              className="btn btn-warning btn-block"
              onClick={() => {
                handleClick();
                notify();
              }}
            >
              Add to Cart
            </button>
            <ToastContainer />
          </div>
          <div className="col-md-4">
            <button className="btn btn-warning d-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-share-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
