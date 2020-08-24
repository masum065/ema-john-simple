import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import './Shop.css';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProduct] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className='shop-container'>
      <div className='procuct-container'>
        {products.map((product) => (
          <Product
            onClick={handleAddProduct}
            key={product.key}
            product={product}
          />
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart} summary={cart.length} />
      </div>
    </div>
  );
};

export default Shop;
