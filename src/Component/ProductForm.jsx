import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductForm.css";

const ProductForm = ({ onSave }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    img: "",
    title: "",
    price: "",
    description: "",
    Material: "",
    Usage: "",
    Shape: "",
    Size: "",
    Color: "",
    Hardness: "",
    Brand: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [imageType, setImageType] = useState("url"); // "url" or "file"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });

    if (name === "img") {
      setImagePreview(value); // Update preview if URL is provided
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, img: reader.result }); // Store Base64 string
        setImagePreview(reader.result); // Update preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Add new product to the array
    const updatedProducts = [...storedProducts, product];

    // Save updated products back to localStorage
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Show success toast notification
    toast.success("Product has been stored successfully!", {
      position: "top-right",
      autoClose: 2000,
      onClose: () => navigate("/admindashboard"),
    });

    // Reset form
    setProduct({
      img: "",
      title: "",
      price: "",
      description: "",
      Material: "",
      Usage: "",
      Shape: "",
      Size: "",
      Color: "",
      Hardness: "",
      Brand: "",
    });
    setImagePreview(null);
    setImageType("url"); // Reset to URL input

    // Call onSave function if needed
    if (onSave) onSave(product);
  };

  return (
    <div className="product-form">
      <ToastContainer />
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Choose Image Input Type:</label>
        <select onChange={(e) => setImageType(e.target.value)} value={imageType}>
          <option value="url">Use Image URL</option>
          <option value="file">Upload from Device</option>
        </select>

        {imageType === "url" ? (
          <>
            <label>Image URL:</label>
            <input type="text" name="img" value={product.img} onChange={handleChange} required />
          </>
        ) : (
          <>
            <label>Upload Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </>
        )}

        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" width="150" height="150" />
          </div>
        )}

        <label>Title:</label>
        <input type="text" name="title" value={product.title} onChange={handleChange} required />

        <label>Price:</label>
        <input type="text" name="price" value={product.price} onChange={handleChange} required />

        <label>Description:</label>
        <input type="text" name="description" value={product.description} onChange={handleChange} required />

        <label>Material:</label>
        <input type="text" name="Material" value={product.Material} onChange={handleChange} required />

        <label>Usage:</label>
        <input type="text" name="Usage" value={product.Usage} onChange={handleChange} required />

        <label>Shape:</label>
        <input type="text" name="Shape" value={product.Shape} onChange={handleChange} required />

        <label>Size:</label>
        <input type="text" name="Size" value={product.Size} onChange={handleChange} required />

        <label>Color:</label>
        <input type="text" name="Color" value={product.Color} onChange={handleChange} required />

        <label>Hardness:</label>
        <input type="text" name="Hardness" value={product.Hardness} onChange={handleChange} required />

        <label>Brand:</label>
        <input type="text" name="Brand" value={product.Brand} onChange={handleChange} required />

        <div className="button-container">
          <button type="submit">Add Product</button>
          <button className="dashboard-button" onClick={() => navigate("/admindashboard")}>
            Admin Dashboard
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;


