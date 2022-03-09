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
      <ul>
          {sidebarCats?.map((cat) => (
              <Link to={`/product-list/${cat.title}`} className="sidebarLink">
                  <li
                      key={`${cat.title}-sidebarItem`}
                  >
                      {cat.title}
                  </li>
              </Link>
          ))}
      </ul>
    </div>
  );
};

export default SidebarProductCategories;
