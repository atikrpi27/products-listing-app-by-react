/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import '../index.css';

const Product = (props) => {
  const { productDes, productPrice, productTitle, productRating, imgURL, productAlt } = props;
  return (
    // <section className="products">
      <article className="product">
        <img className="product__img " src={imgURL} alt={productAlt} />
        <div className="product__details">
          <h4 className="product__title">{productTitle}</h4>
          <p className="product__price">Price: ${productPrice}</p>
          <p className="product__rating">Rating: {productRating}/5</p>
          <p className="product__desc">Description: {productDes}</p>
          <button className="product__btn btn">Add to cart</button>
        </div>
      </article>
    // </section>
  );
};

export default Product;
