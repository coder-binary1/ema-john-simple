import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 0.1;  //calculate 10% tax
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h4>Order Sumary</h4>
            <p>Seleted Item: {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping: $ {shipping} </p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>

        </div>
    );
};

export default Cart;