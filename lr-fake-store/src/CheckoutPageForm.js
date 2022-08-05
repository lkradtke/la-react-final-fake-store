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
    <div className="container">
      <form onSubmit={submitForm}>
        <div className="container p-3 border shadow">
            <div>
                <h4>Shipping:</h4>
                        <p className="m-0 mt-3">Full First and Last Name</p>
                        <input id="nameField" name="fullName" placeholder="John Doe" />
                    <br />
                        <p className="mt-3 m-0">Shipping Address</p>
                        <input className="mx-3" id="shippingAddress" name="shippingAddress" placeholder="Street Address"></input>
                        <input  id="extendedAddress" name="extendedAddress" placeholder="Apt/Suite" />
                    <br />
                        <input className="mx-3 mt-2" id="city" name="city" placeholder="City" />
                        <input className="mx-3" id="state" name="state" placeholder="State" />
                        <input className="mx-3" id="zipCode" name="zipCode" placeholder="Zip Code" />
                        <select className="mx-3" id="country" name="country" placeholder="Country">
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Mexico">Mexico</option>  
                        </select>
            </div>
            <div>
                <h4 className="mt-5">Billing:</h4>
                        <p className="m-0 mt-3">Full First and Last Name</p>
                        <input id="nameField" name="fullName" placeholder="John Doe" />
                        <p className="m-0 mt-3">Email Address</p>
                    <input id="emailField"  name="email" placeholder="email@gmail.com" type="email" />
                    <br />
                        <p className="m-0 mt-3">Billing Address</p>
                        <input className="mx-3" id="billingAddress" name="billingAddress" placeholder="Street Address"></input>
                        <input id="extendedAddress" name="extendedAddress" placeholder="Apt/Suite" />
                    <br />
                        <input className="mx-3 mt-2" id="city" name="city" placeholder="City" />
                        <input className="mx-3" id="state" name="state" placeholder="State" />
                        <input className="mx-3" id="zipCode" name="zipCode" placeholder="Zip Code" />
                        <select className="mx-3" id="country" name="country" placeholder="Country">
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Mexico">Mexico</option>  
                        </select>
            </div>
            <div className="container mt-5">
                <h4 className="mt-5">Payment</h4>
                        <p className="m-0 mt-3">Cardholder's Name</p>
                        <input htmlFor="Cardholder's Name" label="Cardholder's Name" type="text" name="name" placeholder="John Doe" />
                    <br />
                        <p className="m-0 mt-3">Card Number</p>
                        <input htmlFor="Card Number" label="number" placeholder="0000 1111 0000 1111" type="text" name="card_number" />
                    <br />
                        <p className="m-0 mt-3">Expiration Date</p>
                        <input htmlFor="Expiry" label="expiry" type="month" name="expiry_date" />
                        <p className="m-0 mt-3">Security Code</p>
                        <input htmlFor="CVV" label="CVV" type="number" name="cvv" placeholder="000" />
            </div>
                

            <Link to='/products'><button type="submit" style={{ margin: '2rem', borderRadius: '5px', border: 'none', backgroundColor: '#081640', color:'#eee'}} onClick={() => {
                setItems([]);
            }}>Place Order</button></Link>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPageForm;