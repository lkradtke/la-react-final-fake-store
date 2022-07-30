import React, { useDebugValue } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './productPage.module.css';

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
                    {products.map(product => (
                        <li className="listProduct" key={product.id}>
                            <img src={product.image} alt={product.title}></img><br />
                            {product.title}<br />
                            {product.price}
                            <button>Details</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>   
    )
};

export default ProductPage
