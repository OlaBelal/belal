import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../rtk/slices/Cart-slice';
import Product from './product';

function ProductDetails() {
  const api_url = 'https://fakestoreapi.com/products';
  const [product, setProduct] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const inCart = cartItems.some((item) => item.id === product.id);

  return (
    <>
      <Product product={product} buttonshow inCart={inCart} />
      {!inCart && (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </>
  );
}

export default ProductDetails;