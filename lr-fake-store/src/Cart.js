import React from "react";
import "./cart.module.css";
import CartContext from "./CartContext";
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { ReactDOM } from "react";

const Cart = () => {
    const {setItems} = useContext(CartContext);
    const {items} = useContext(CartContext);

    const remove = (item) => {
        let filteredArr = items.filter((el) => el !== item);
        setItems(filteredArr);
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center">
                {items.map(item => (
                            <li className="d-flex flex-column p-3 border shadow m-1 align-items-center" key={item.id}>
                                <img src={item.image}></img>
                                <h6>{item.title}</h6><br />
                                <h6>${item.price}</h6>
                                <h6>Quantity: {item.quantity}</h6>
                                <button style={{ borderRadius: '5px', border: 'none', backgroundColor: '#081640', color:'#eee'}} onClick={() => {
                                    remove(item)
                                }}>Remove From Cart</button>
                            </li>
                            

                        ))}
            </div>
            <Link style={{ textDecoration: 'none' }} to="/checkout"><h4 style={{ color: '#081640'}} className="mt-5"><i class="fa-solid fa-cart-shopping"></i>Go to Checkout</h4></Link>
        </div>
    )
};

export default Cart;