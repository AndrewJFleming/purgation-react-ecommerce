import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

import "./Sidebar.css";
import SidebarFeaturedProducts from "./SidebarFeaturedProducts/SidebarFeaturedProducts";
import SidebarProductCategories from "./SidebarProductCategories/SidebarProductCategories";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <SidebarFeaturedProducts />
      <SidebarProductCategories />
    </div>
  );
};

export default Sidebar;
