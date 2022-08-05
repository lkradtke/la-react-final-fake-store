import React from "react";
import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [items, setItems] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(0);
    const [newItems, setNewItems] = useState([]);
    console.log(items);

    const addToCart = (description, id, image, price, title, quantity) => {
        setItems((prevState) => [...prevState, { description, id, image, price, title, quantity }]);
        
    }

    const removeFromCart = (item) => {
        const removedItem = items.splice(item.key-1, 0)
    }

    return(
        <CartContext.Provider value={{items, setItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;