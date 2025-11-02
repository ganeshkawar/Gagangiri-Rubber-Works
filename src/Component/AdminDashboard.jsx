import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import "../index.css";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from localStorage when component mounts
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleAddProduct = () => {
    navigate("/productform");
  };
  const handleLogout = () => {
    navigate("/");
  };
  const handleUserInfo = () => {
    navigate("/userinfo");
  };

  const handleEdit = (product) => {
    navigate("/updateproduct", { state: { product } });
  };

  const handleDelete = (title) => {
    const updatedProducts = products.filter((product) => product.title !== title);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); // Update localStorage
  };

  return (
  <>
      <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="button-container" style={{ float: "right",marginBottom:"20px",gap:"10px" }}>
        <button className="productform" onClick={handleAddProduct}>Add Product</button>
        <button className="productform" onClick={handleUserInfo}>User Information</button>
        <button className="productform" onClick={handleLogout}>Logout</button>
      </div>
      <table className="product-table" border={2}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Material</th>
            {/* <th>Usage</th> */}
            <th>Shape</th>
            <th>Size</th>
            <th>Color</th>
            <th>Hardness</th>
            <th>Brand</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index}>
                <td>
                  <img src={product.img} alt={product.title} className="small-img" />
                </td>
                <td>{product.title}</td>
                <td>₹{product.price}</td>
                <td>{product.description}</td>
                <td>{product.Material}</td>
                {/* <td>{product.Usage}</td> */}
                <td>{product.Shape}</td>
                <td>{product.Size}</td>
                <td>{product.Color}</td>
                <td>{product.Hardness}</td>
                <td>{product.Brand}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEdit(product)}>Edit</button>
                </td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(product.title)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12" style={{ textAlign: "center" }}>No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </>
  );
};

export default AdminDashboard;
