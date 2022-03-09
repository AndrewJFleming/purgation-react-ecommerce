import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

import "./SidebarProductCategories.css";
import { categoryData } from "../../../../dummyData";

const SidebarProductCategories = () => {
  const [sidebarCats, setSidebarCats] = useState([]);

  useEffect(() => {
    setSidebarCats(categoryData);
  }, []);

  return (
    <div className="sidebar-wrapper">
      <h6>Product Categories</h6>
      <hr/>
          {sidebarCats?.map((cat) => (
              <Link to={`/product-list/${cat.title}`} className="sidebarLink">
                  <div  className="sidebar-cat-item"
                    key={`${cat.title}-sidebarItem`}
                  >
                      <i className="fad fa-folder sidbar-cat-icon"></i>
                      {cat.title}
                  </div>
              </Link>
          ))}
    </div>
  );
};

export default SidebarProductCategories;
