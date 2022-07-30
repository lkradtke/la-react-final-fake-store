import React from "react";
import './header.module.css';
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";

const Header = () => {
    return (
        <nav>
            <ul>
                <li>Shop</li>
                <li>Checkout</li>
                <li>Cart</li>
            </ul>
        </nav>
    )
};

export default Header;