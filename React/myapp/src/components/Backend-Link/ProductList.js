// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('default');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const router = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/getproducts');
      if (response.data.success) {
        const productsData = response.data.products;
          setProducts(productsData);
          setFilteredProducts(productsData); 
          // Default display

          const uniqueCategories = Array.from(new Set(productsData.map((p) => p.category)));
          setCategories(['All', ...uniqueCategories]); 
          // Include 'All' option and other options
      } else {
        toast.error('Failed to retrieve products');
      }
    } catch (error) {
      toast.error('An error occurred while fetching products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log('Filtered products updated:', filteredProducts);
  }, [filteredProducts]);
  

  // Sort Products
  const handleSortChange = (e) => {
    const sort = e.target.value;
    console.log('Sorting changed to:', sort);
    setSortOption(sort);

    let sortedProducts = [...filteredProducts]; //taking all products
    if (sort === 'lowtohigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'hightolow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  // Filter by Category
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    console.log('Category changed to:', category);
    setSelectedCategory(category);

    const filtered = category === 'All' ? products : products.filter((p) => p.category === category);
    setFilteredProducts(filtered);

    // Reset sort option to default
    setSortOption('default');
  };



  return (
    <div>
      <h2>Product List</h2>
      <h4>Sort</h4>
      <div>
        <label>Sort By: </label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="lowtohigh">Price: Low to High</option>
          <option value="hightolow">Price: High to Low</option>
        </select>
      </div>

      <h4>Catgory</h4>
      <div>
        <label>Filter By Category: </label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="product-card" 
            onClick={() => {
              router(`/singleproduct/${product._id}`);
            }}
            >
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
             
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default ProductList;
