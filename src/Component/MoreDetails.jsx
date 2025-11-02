import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
import CardComponent from "./CardComponent";
import Footer from "./Footer"; 

const MoreDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState(() => {
    return location.state || JSON.parse(localStorage.getItem("productDetails")) || {};
  });

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.state) {
      localStorage.setItem("productDetails", JSON.stringify(location.state));
      setProduct(location.state);
    }
  }, [location.state]);

  const { img, title, price, description, Material, Usage, Shape, Size, Color, Hardness, Brand } = product;

  return (
    <>
      {/* Responsive Card Container */}
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "center", 
          padding: "20px",
          flexWrap: "wrap",
        }}
      >
        <Card 
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, 
            maxWidth: 800,
            width: "100%",
            padding: 2,
          }}
        >
          {/* Left Side - Image */}
          <CardMedia 
            component="img"
            sx={{ 
              width: { xs: "100%", sm: 300 }, 
              objectFit: "contain", 
              padding: 2 
            }}
            image={img} 
            alt={title} 
          />
          
          {/* Right Side - Information */}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ textAlign: { xs: "center", sm: "left" } }}>{title}</Typography>
            <Typography variant="h6" sx={{ marginTop: 1, textAlign: { xs: "center", sm: "left" } }}>₹{price}</Typography>
            <Typography variant="body1" sx={{ marginTop: 1, textAlign: { xs: "center", sm: "left" } }}>
              <b>{description}</b>
            </Typography>

            {/* Product Details */}
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="body1"><b>Material:</b> {Material}</Typography>
              <Typography variant="body1"><b>Usage:</b> {Usage}</Typography>
              <Typography variant="body1"><b>Shape:</b> {Shape}</Typography>
              <Typography variant="body1"><b>Size:</b> {Size}</Typography>
              <Typography variant="body1"><b>Color:</b> {Color}</Typography>
              <Typography variant="body1"><b>Hardness:</b> {Hardness}</Typography>
              <Typography variant="body1"><b>Brand:</b> {Brand}</Typography>
            </Box>

            {/* Buttons with Responsive Alignment */}
            <Box 
              sx={{ 
                display: "flex", 
                flexDirection: { xs: "column", sm: "row" }, 
                justifyContent: { xs: "center", sm: "flex-start" },
                alignItems: "center", 
                gap: 2, 
                marginTop: 3,
              }}
            >
              <Button 
                variant="contained" 
                sx={{ width: { xs: "100%", sm: "auto" } }}
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ width: { xs: "100%", sm: "auto" } }}
                onClick={() => navigate("/contact")}
              >
                Contact
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <h2>Other Products</h2>
      {/* Display other products */}
      <Box>
        <CardComponent />
      </Box>

      {/* Footer */}
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default MoreDetails;
