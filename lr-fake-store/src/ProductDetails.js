import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, Link } from "react-router-dom";
import "./productDetails.module.css";

const ProductDetails = () => {

    const params = useParams();
    console.log('Params:' , params.id);

    const [item, setItem] = useState({});

    const fetchProduct = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const items = await data.json();
        setItem(items);
    };

    useEffect (() => {
        fetchProduct();
    }, []);

    console.log(item);

    return (
        <div className="productDetails">
            <img src={item.image}></img>
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <Link to="/products"><button>Return to Catalog</button></Link>
        </div>
    )
};

export default ProductDetails;