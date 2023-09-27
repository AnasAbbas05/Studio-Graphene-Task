import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Product List</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
