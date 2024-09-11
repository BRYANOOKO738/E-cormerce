import React, { useState, useEffect } from 'react';
import './Products.css'
import { Link } from 'react-router-dom';

function Products2() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Optional: To show a loading state

useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/Product/");

        // Log the status code for debugging
        console.log('Response status:', response.status);

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  if (loading) {
    return <div>Loading...</div>; // Optional: Show a loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='mt-4'>
          <h1>Products</h1>
         
        <div className="container">
              <div className="row">
                  {products.length > 0 ? (
          products.map((product) => (
                      <div className="col-md-3 mb-4 " key={product.id}>
                          <div className="card border-3 flex-fill card-hover">
                              <img src={product.img} alt={product.tittle} style={{height:"200px"}} className="img-fluid mx-auto"/>
                                                             
                                 <h5>{product.title.substring(0,12)}</h5>
                                 <p style={{color:"red"}}><strong>${product.price}</strong></p>
                                    <div className=''>
                                   <Link to={`/products/${product.id}`} className="btn btn-primary">Buy now</Link>
                                    {/* <button className="btn btn-warning">Add to Cart</button> */}
                                    </div>
                                  
                        </div>
                         
                              
                          </div>
                      
                  ))):(<div className="col-12">
            <p>No Product found</p>
          </div>)}
              </div>
      </div>
    </div>
  );
}

export default Products2;
