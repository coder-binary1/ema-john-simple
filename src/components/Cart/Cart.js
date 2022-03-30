import React from 'react';

const Cart = (props) => {
    const { cart } = props
    return (
        <div>
            <h4>Order Sumary</h4>
            <p>Seleted Item: {cart.length}</p>
        </div>
    );
};

export default Cart;