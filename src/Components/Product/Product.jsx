import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className='product'>
      <div className='product-image'>
        <img src={img} alt='' />
      </div>
      <div className='product-content'>
        <h3>{name}</h3>
        <p>By: {seller}</p>
        <p className='product-price'>${price}</p>
        <p>only {stock} left in stock - order soon</p>
        <button
          onClick={() => props.onClick(props.product)}
          className='boxed-btn'
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
