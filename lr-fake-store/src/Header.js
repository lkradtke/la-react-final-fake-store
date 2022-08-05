import React, { useContext } from "react";
import classes from "./header.module.css";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";

const Header = () => {
    const {items} = useContext(CartContext);

    return (
        <header className={classes.header}>
            <ul>
                <Link style={{ textDecoration: 'none', color: '#081640'}} to="/products"><li>Products</li></Link>
                <Link style={{ textDecoration: 'none', color: '#081640'}} to="/cart"><li><i class="fa-solid fa-cart-shopping"></i>Cart ({items.length})</li></Link>
                <Link style={{ textDecoration: 'none', color: '#081640'}} to="/checkout"><li>Checkout</li></Link>
            </ul>
        </header>
    )    
}



export default Header;