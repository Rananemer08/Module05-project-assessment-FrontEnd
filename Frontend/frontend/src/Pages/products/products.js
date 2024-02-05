import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./products.css"

function Products() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        setProductList(response.data.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <>
      <div className="container">
        <div className="card">
          <ul className="product-list">
            {productList.map((content) => (
              <li key={content._id}>
                <div className="product">
                  <div className="product-image">
                    <img src={`http://localhost:4000/${content.image}`}   alt={content.productName} />
                  </div>
                  <div className="product-imformation">
                    <h4>{content.productName}</h4>
                    <div className="specification">
                      <span>{content.color} Color</span>
                      <small className="line"></small>
                      <span>{content.fabric} Fabric</span>
                    </div>
                    <span>${content.price}</span>
                    <Link
                      to={`/addtocart/${content._id}`}
                      className='btn btn-sm btn-primary mx-2'
                    >
                      add 
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Products;
