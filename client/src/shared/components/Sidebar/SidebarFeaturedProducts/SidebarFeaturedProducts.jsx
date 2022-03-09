import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

import "./SidebarFeaturedProducts.css";
import { featuredProductData } from "../../../../dummyData";

const SidebarFeaturedProducts = () => {
  const [featProducts, setFeatProducts] = useState([]);

  useEffect(() => {
    setFeatProducts(featuredProductData);
  }, []);

  return (
    <div className="sidebar-featured-products-wrapper">
      <h6>Featured Products</h6>
      <hr/>
      <div className="sidebar-featured-products-list">
        {featProducts.slice(2, 8).map((p) => (
          <div className="sidebar-featured-product">
            <img className="featured-product-image" src={p?.img} />
            <Link to={`/product/${p?.productId}`} key={p._id}>
              <p>
                {p?.title}
              </p>
            </Link>
            ${p?.price}
            <hr/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarFeaturedProducts;