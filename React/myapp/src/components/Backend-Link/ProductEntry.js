// src/components/ProductEntryForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductEntryForm = () => {
  const [product, setProduct] = useState({
    category: '',
    name: '',
    price: '',
    imageUrl: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/addproducts', product);
      if (response.data.success) {
        toast.success('Product added successfully!');
        setProduct({ category: '', name: '', price: '', imageUrl: '', quantity: '' });
        // After success set fields to empty again
      } else {
        toast.error('Failed to add product');
      }
    } catch (error) {
      toast.error(error.response?.data.message || 'An error occurred while adding the product');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
    <h2>Product Entry</h2>
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>

      <button type="submit" style={{ padding: '10px 15px', marginTop: '10px' }}>Add Product</button>
    </form>
      <ToastContainer position="top-center" autoClose={2000} />
  </div>
);
};

export default ProductEntryForm;
