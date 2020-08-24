import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  let total = cart.reduce((total, pdr) => {
    const grand = total + pdr.price;
    return grand;
  }, 0);

  // Shopping
  let shipping = 0;
  if (total > 40) {
    shipping = 4.99;
  } else if (total > 15) {
    shipping = 12.89;
  } else if (total > 0) {
    shipping = 15.55;
  }
  let tax = total / 10;

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Order Summary</h3>
      <p style={{ textAlign: 'center', fontWeight: '700' }}>
        Items ordered: {props.summary}
      </p>
      <table>
        <tbody>
          <tr>
            <td>Items:</td>
            <td>${total.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Shipping & Handling:</td>
            <td>${shipping.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total before tax:</td>
            <td>${(total + shipping).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Estimated Tax:</td>
            <td>${tax.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <p className='total-amount'>
        Order Total ${(total + shipping + tax).toFixed(2)}
      </p>
      <button className='boxed-btn'>Review Your Order</button>
    </div>
  );
};

export default Cart;
