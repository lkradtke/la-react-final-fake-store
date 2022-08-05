import React from "react";
import "./checkoutPage.module.css";
import {useState, useContext} from "react";
import CartContext from "./CartContext";
import CheckoutPageForm from "./CheckoutPageForm";

const CheckoutPage = () => {
    const {items} = useContext(CartContext);
    const [itemTotal, setItemTotal] = useState();
    const [cartTotal, setCartTotal] = useState();
    
    
    console.log('Items: ',items);

    const cartArray = () =>
    items.map((item) => {
        return item.price * item.quantity;
    })

    const cartProductTotal = 
        cartArray().reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);

    return (
        <div className="container mt-5">
            <h1>Checkout</h1>
            <div className="d-flex justify-content-center">
                {items.map(item => (
                            <li className="d-flex flex-column p-3 border shadow m-1 align-items-center" key={item.id}>
                                <img src={item.image}></img>
                                <h6>{item.title}</h6><br />
                                <h6>${item.price}</h6>
                                <h6>Quantity: {item.quantity}</h6>
                                <h6>Total: {item.itemTotal}</h6>
                                
                            </li>
                        ))}
            </div>
            <h3>Cart Total: ${cartProductTotal.toFixed(2)}</h3>
            <CheckoutPageForm />
        </div>
    )
};

export default CheckoutPage;