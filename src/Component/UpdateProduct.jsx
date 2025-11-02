import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [updatedProduct, setUpdatedProduct] = useState(product || {});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate("/admindashboard");
    }
  }, [product, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let products = JSON.parse(localStorage.getItem("products")) || [];

    const updatedProducts = products.map((p) =>
      p.title === product.title ? updatedProduct : p
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    setOpenSnackbar(true);
    setTimeout(() => {
      navigate("/admindashboard", { state: { updated: true } });
    }, 1500);
  };

  return (
    <div className="update-product-container">
      <h2>Update Product</h2>
      <form className="update-product-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" placeholder="Title" value={updatedProduct.title} onChange={handleChange} required />

        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" placeholder="Price" value={updatedProduct.price} onChange={handleChange} required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" placeholder="Description" value={updatedProduct.description} onChange={handleChange} required />

        <label htmlFor="Material">Material:</label>
        <input type="text" id="Material" name="Material" placeholder="Material" value={updatedProduct.Material} onChange={handleChange} required />

        <label htmlFor="Shape">Shape:</label>
        <input type="text" id="Shape" name="Shape" placeholder="Shape" value={updatedProduct.Shape} onChange={handleChange} required />

        <label htmlFor="Size">Size:</label>
        <input type="text" id="Size" name="Size" placeholder="Size" value={updatedProduct.Size} onChange={handleChange} required />

        <label htmlFor="Color">Color:</label>
        <input type="text" id="Color" name="Color" placeholder="Color" value={updatedProduct.Color} onChange={handleChange} required />

        <label htmlFor="Hardness">Hardness:</label>
        <input type="text" id="Hardness" name="Hardness" placeholder="Hardness" value={updatedProduct.Hardness} onChange={handleChange} required />

        <label htmlFor="Brand">Brand:</label>
        <input type="text" id="Brand" name="Brand" placeholder="Brand" value={updatedProduct.Brand} onChange={handleChange} required />

        <button className="update-button" type="submit">Update</button>
      </form>

      <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)}>
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
          Product updated successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default UpdateProduct;
