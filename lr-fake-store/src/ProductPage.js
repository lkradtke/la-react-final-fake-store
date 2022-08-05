import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import classes from "./productPage.module.css";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";


const ProductPage = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async() => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        console.log(data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="container">
                {products.length > 0 && (
                    <ul className="d-flex flex-wrap">
                        {products.map(product => (
                            <li className="p-3 border shadow m-1" key={product.id}>
                                <img src={product.image} alt={product.title}></img><br />
                                {product.title}<br />
                                ${product.price}<br />
                                <Link to={`/products/${product.id}`}><button style={{ margin: '1rem', borderRadius: '5px', border: 'none', backgroundColor: '#081640', color:'#eee'}}>Details</button></Link>
                            </li>
                        ))}
                    </ul>
                )}

        </div>   
    )
};

export default ProductPage;
