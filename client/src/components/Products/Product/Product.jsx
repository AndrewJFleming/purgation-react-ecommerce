import React from "react";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`} className="productList-card-link">
        <img
          className="productList-card-image"
          src={product.img}
          alt={`${product.title}-productList-thumb`}
        />
      </Link>
        <div className="card-inner">
          <Link
            to={`/product/${product._id}`}
            className="productList-card-link"
          >
            <p className="productList-card-title">{product.title}</p>
          </Link>
          <p className="productList-card-price">${product.price}</p>
          {product?.categories.slice(0, 3).map((c) => (
              <span key={c}>
                <Link
                  to={`/product-list/${c}`}
                  className="productList-card-cat"
                >
                  {c}
                </Link>
                &nbsp;
              </span>
            ))}
        </div>
          <Link to={`/product/${product._id}`} className="productList-card-link">
            <button
              className="productList-card-button"
            >Explore</button>
          </Link>
    </div>
  );
};
export default Product;
