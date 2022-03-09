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
      <h6>Product Categories</h6>
      <hr/>
      <div className="sidebar-featured-products-list">
        {featProducts.slice(2, 8).map((p) => (
          <div>
              <img className="featured-product-image" src={p?.img} />
            <Link to={`/product/${p?.productId}`} key={p._id}>
              {p?.title}<br/>
            </Link>
            ${p?.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarFeaturedProducts;