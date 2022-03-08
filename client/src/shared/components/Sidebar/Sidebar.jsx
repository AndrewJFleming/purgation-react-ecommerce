import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

import "./Sidebar.css";
import { categoryData } from "../../../dummyData";

const Sidebar = () => {
  const [sidebarCats, setSidebarCats] = useState([]);

  useEffect(() => {
    setSidebarCats(categoryData);
  }, []);

  return (
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
  );
};

export default Sidebar;
