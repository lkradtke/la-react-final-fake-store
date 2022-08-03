import React from "react";
import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, Link } from "react-router-dom";
import CartContext from "./CartContext";
import "./productDetails.module.css";

const ProductDetails = () => {

    const {addToCart} = useContext(CartContext);
    const {addQuantity} = useContext(CartContext);
    const params = useParams();
   

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
        <div className="container">
            <img src={item.image}></img>
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <form>
                <input type="number" placeholder="0" min="0" max="5" id="numInput"></input>
            </form>
            <button onClick={() => {
                const numInput = parseInt(document.getElementById("numInput").value)
                addToCart(item.description, item.id, item.image, item.price, item.title, item.quantity = numInput);
            }}>
                Add To Cart</button><br />
            <Link to="/products"><button>Return to Products</button></Link>
        </div>
    )
};

export default ProductDetails;