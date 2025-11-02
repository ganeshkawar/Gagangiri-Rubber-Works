import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const CardComponent = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    // Load products from localStorage on component mount
    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        setProducts(storedProducts);
    }, []);

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
                {products.length > 0 ? (
                    products.map((item, index) => (
                        <Card key={index} sx={{ maxWidth: 300, padding: 2, borderRadius: 3 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.img}
                                alt={item.title}
                                sx={{ objectFit: "contain" }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => navigate("/MoreDetails", { state: item })}>
                                    More Details
                                </Button>
                            </CardActions>
                        </Card>
                    ))
                ) : (
                    <Typography variant="h6">No products available</Typography>
                )}
            </div>
        </>
    );
};

export default CardComponent;