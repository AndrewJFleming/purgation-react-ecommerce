import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./SidebarFeaturedProducts.css";

const SidebarFeaturedProducts = () => {
  const [featProducts, setFeatProducts] = useState([]);

  useEffect(() => {
    const getFeaturedProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/products/`
        );
        const featureProducts = res.data.filter((p) => p.isFeatured);
        setFeatProducts(featureProducts);
      } catch (err) {
        console.log(err);
      }
    };
    getFeaturedProducts();
  }, []);

  return (
    <div className="sidebar-featured-products-wrapper">
      <h6>Featured Products</h6>
      <hr />
      <div className="sidebar-featured-products-list">
        {featProducts.slice(0, 8).map((p) => (
          <div className="sidebar-featured-product">
            <img className="featured-product-image" src={p?.img} />
            <Link to={`/product/${p?.productId}`} key={p._id}>
              <p>{p?.title}</p>
            </Link>
            ${p?.price}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarFeaturedProducts;
