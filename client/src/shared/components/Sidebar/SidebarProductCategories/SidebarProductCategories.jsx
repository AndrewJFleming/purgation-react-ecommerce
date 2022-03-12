import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./SidebarProductCategories.css";
import { categoryData } from "../../../../dummyData";

const SidebarProductCategories = () => {
  const [sidebarCats, setSidebarCats] = useState([]);

  useEffect(() => {
    const getSidebarCats = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/categories/`
        );
        setSidebarCats(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSidebarCats();
  }, []);

  return (
    <div className="sidebar-wrapper">
      <h6>Product Categories</h6>
      <hr />
      {sidebarCats?.map((cat) => (
        <Link to={`/product-list/${cat.title}`} className="sidebarLink">
          <div className="sidebar-cat-item" key={`${cat.title}-sidebarItem`}>
            <i className="fad fa-folder sidbar-cat-icon"></i>
            {cat.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SidebarProductCategories;
