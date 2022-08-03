import React, { useContext } from "react";
import "./header.module.css";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";

const Header = () => {
    const {items} = useContext(CartContext);

    return (
        <nav>
            <ul className="headerStyle" style={{display: 'flex', justifyContent: 'space-around', textDecoration: 'none'}}>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/cart"><li>Cart ({items.length})</li></Link>
                <Link to="/checkout"><li><i class="fa-solid fa-cart-shopping"></i>Checkout</li></Link>
            </ul>
        </nav>
    )    
}



export default Header;