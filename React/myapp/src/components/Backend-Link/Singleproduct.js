import React, { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});

  const getSingleProductData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/singleproduct/${productId}`);
      if (response.data.success) {
        console.log(response.data.productData)
        setProductData(response.data.productData);
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      getSingleProductData();
    }
  }, [productId, getSingleProductData]);
  return (
    <div
      style={{
        width: "18%",
        height: "400px",
        border: "2px solid black",
        padding: "10px",
        cursor: "pointer",
        margin: "auto",
      }}
    >
      <img
        style={{ width: "85%", height: "65%", border: "1px solid black" }}
        src={productData.image}
        alt={productData.name || "Product Image"} 
      />
      <p>
        <b>Name</b> - {productData.name}
      </p>
      <p>
        <b>Price</b> - {productData.price}/-
      </p>
      <p>
        <b>Quantity</b> - {productData.quantity}
      </p>
    </div>
  );
};

export default Product;