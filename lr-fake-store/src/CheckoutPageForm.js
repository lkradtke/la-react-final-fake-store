import React, {useContext} from "react";
import CartContext from "./CartContext";
import {Link} from 'react-router-dom';

const CheckoutPageForm = () => {

    const {items} = useContext(CartContext);
    const {setItems} = useContext(CartContext);

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData);
    

    console.log(inputObject);
  };

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <div>
            <h4>Your Information</h4>
        
                <p>First and Last Name</p>
                <input id="nameField" name="fullName" placeholder="John Doe" />
            

            
                <p>Email Address</p>
                <input id="emailField"  name="email" placeholder="email@gmail.com" type="email" />
            

            
                <p>Phone Number</p>
                <input id="phoneField" name="phone" placeholder="(419) 555-5555" type="tel" />
            

            
                <p>Enter your password:</p>
                <input id="passwordField" name="password" placeholder="********" type="text" />
            

        </div>
        <div>
            <h4>Shipping:</h4>
                <br />
                    <p>Full First and Last Name</p>
                    <input id="nameField" name="fullName" placeholder="John Doe" />
                <br />
                    <p>Shipping Address</p>
                    <input id="shippingAddress" name="shippingAddress" placeholder="Street Address"></input>
                    <input id="extendedAddress" name="extendedAddress" placeholder="Apt/Suite" />
                <br />
                    <input id="city" name="city" placeholder="City" />
                    <input id="state" name="state" placeholder="State" />
                    <input id="zipCode" name="zipCode" placeholder="Zip Code" />
                    <select id="country" name="country" placeholder="Country">
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>  
                    </select>
        </div>
        <div>
            <h4>Billing:</h4>
                <br />
                    <p>Full First and Last Name</p>
                    <input id="nameField" name="fullName" placeholder="John Doe" />
                <br />
                    <p>Billing Address</p>
                    <input id="billingAddress" name="billingAddress" placeholder="Street Address"></input>
                    <input id="extendedAddress" name="extendedAddress" placeholder="Apt/Suite" />
                <br />
                    <input id="city" name="city" placeholder="City" />
                    <input id="state" name="state" placeholder="State" />
                    <input id="zipCode" name="zipCode" placeholder="Zip Code" />
                    <select id="country" name="country" placeholder="Country">
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>  
                    </select>
        </div>
        <div>
            <h4>Payment</h4>
                    <p>Cardholder's Name</p>
                    <input htmlFor="Cardholder's Name" label="Cardholder's Name" type="text" name="name" placeholder="John Doe" />
                <br />
                    <p>Card Number</p>
                    <input htmlFor="Card Number" label="number" placeholder="0000 1111 0000 1111" type="text" name="card_number" />
                <br />
                    <p>Expiration Date</p>
                    <input htmlFor="Expiry" label="expiry" type="month" name="expiry_date" />
                    <p>Security Code</p>
                    <input htmlFor="CVV" label="CVV" type="number" name="cvv" placeholder="000" />
        </div>
            

        <Link to='/products'><button type="submit" onClick={() => {
            setItems([]);
        }}>Place Order</button></Link>
      </form>
    </div>
  );
}

export default CheckoutPageForm;