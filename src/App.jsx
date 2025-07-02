import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Product List</h1>
      <div className="grid">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span className="price">${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
