import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./ContactUs.css";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...storedUsers, { ...formData, date: new Date().toISOString().split("T")[0] }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setFormData({ name: "", phone: "", email: "" });

    setTimeout(() => setOpenSnackbar(false), 2000);
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-box">
            <h2 className="contact-title">Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <button type="submit" className="contact-button">Send Message</button>
            </form>
          </div>

          {/* Image Section */}
          <div className="contact-image">
            <img 
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714694400&semt=ais" 
              alt="Customer Support" 
            />
          </div>
        </div>

        {/* Snackbar Component */}
        <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)}>
          <Alert severity="success" variant="filled">Message sent successfully!</Alert>
        </Snackbar>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
