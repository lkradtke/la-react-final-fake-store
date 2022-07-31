import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './productPage.module.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
        <div>
            {products.length > 0 && (
                <ul>
                    <h2>Products</h2>
                    {products.map(product => (
                        <li className="listProduct" key={product.id}>
                            <img src={product.image} alt={product.title}></img><br />
                            {product.title}<br />
                            {product.price}<br />
                            <Link to={`/products/${product.id}`}><button>Details</button></Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>   
    )
};

export default ProductPage;
