import React,{useState} from 'react'
import './Products.css'
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const [filter, setFilter] = useState({});
  // const [Sort, setSort] = useState(second)

  // Handle dropdown item click
  const handleFilter = (e) => {
    const name = e.target.name;
    const value = e.target.textContent; // or e.target.value if using button elements
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  console.log("Current Location:", location.pathname.split("/"));
  console.log("Current Filter:", filter);

  return (
    <div className="justify-content-between">
      <div className="d-flex justify-content-between">
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Categories
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                name="category"
                onClick={handleFilter}
              >
                Electronics
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="category"
                onClick={handleFilter}
              >
                Furniture
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="category"
                onClick={handleFilter}
              >
                Kitchenware
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Size
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                name="size"
                onClick={handleFilter}
              >
                Standard Size
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="size"
                onClick={handleFilter}
              >
                S
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="size"
                onClick={handleFilter}
              >
                L
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Color
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                name="color"
                onClick={handleFilter}
              >
                Black
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="color"
                onClick={handleFilter}
              >
                Silver
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="color"
                onClick={handleFilter}
              >
                Blue
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="color"
                onClick={handleFilter}
              >
                Brown
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="color"
                onClick={handleFilter}
              >
                Beige
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="color"
                onClick={handleFilter}
              >
                Navy Blue
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="color"
                onClick={handleFilter}
              >
                Clear
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="color"
                onClick={handleFilter}
              >
                White
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Sort
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                name="sort"
                onClick={handleFilter}
              >
                Price (Asc)
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                name="sort"
                onClick={handleFilter}
              >
                Price (Des)
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products