import React from "react";
import './header.module.css';
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav>
            <ul className="headerStyle" style={{display: 'flex', justifyContent: 'space-around', textDecoration: 'none'}}>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/carts"><li>Cart</li></Link>
                <Link to="/checkout"><li><i class="fa-solid fa-cart-shopping"></i>Checkout</li></Link>
            </ul>
        </nav>
    )
};

export default Header;