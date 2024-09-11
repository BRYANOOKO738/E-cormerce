import React, { useState, useEffect } from "react";
import Products from "../Components/Products";
import Carousel from "../Components/Carousel";
import Newsleter from "../Components/Newsleter";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Product3 from "../Components/Product3";
import Products2 from "../Components/Products2";

const Home = () => {
  const [filter, setFilter] = useState({});

  // Function to handle filter changes
  const handleFilter = (name, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  // Fetch filtered products
  useEffect(() => {
   
    fetch(
      `http://localhost:3000/Product/min?${new URLSearchParams(
        filter
      ).toString()}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [filter]);
 // You can perform data fetching here based on the filter state
    // Example:
  return (
    <>
      <Carousel />
      <div className="mt-sm-5 mx-sm-5">
        <Products />
        <Product3 filter={filter} onFilterChange={handleFilter} />
        <Newsleter />
        <Contact />
        {/* <Footer className="w-100" /> */}
      </div>
    </>
  );
};

export default Home;
